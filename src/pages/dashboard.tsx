import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic";
import { getSession, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { apexOptions } from "../utils/apexChartsConfig";

type HistoricMeasures = {
  height: number;
  weight: number;
  waist: number;
  neck: number;
  created_at: Date;
};

type UnitsMeasure = {
  height: string;
  weight: string;
  waist: string;
  neck: string;
};

interface UserMeasureData {
  historicMeasures: HistoricMeasures[];
  unitsMeasure: UnitsMeasure;
}
interface DashboardProps {
  session: Session;
  userMeasuresData: UserMeasureData;
}

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function Dashboard({ userMeasuresData }: DashboardProps) {
  const router = useRouter();
  const [session] = useSession();

  const weight = [
    {
      name: "weight",
      data: userMeasuresData.historicMeasures.map((measure, id) => [
        new Date(measure.created_at),
        measure.weight,
      ]),
    },
  ];

  useEffect(() => {
    if (!session) {
      router.push(`/login`);
    }
  }, [session]);

  return (
    <Flex w="100%">
      <Sidebar />
      <SimpleGrid
        flex="1"
        gap="4"
        minChildWidth="320px"
        align="flex-start"
        p="8"
      >
        <Box p="8" bg="gray.800" borderRadius={8}>
          <Text fontSize="lg" mb="4">
            Peso
          </Text>
          <Chart
            options={apexOptions}
            series={weight}
            type="area"
            height={160}
          />
        </Box>
      </SimpleGrid>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const session = await getSession({ req });
  const url = "http://localhost:3333/statistics/measures";

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //       permanent: false,
  //     },
  //   };
  // }

  const response = await fetch(url, {
    method: "GET",
    headers: {
      authorization: `Bearer ${session?.accessToken}`,
    },
  });

  const userMeasuresData = await response.json();

  if (!response.ok) {
    signOut();
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      userMeasuresData,
    },
  };
};
