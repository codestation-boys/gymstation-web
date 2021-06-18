import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic";
import { getSession, useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { GetServerSideProps } from "next";
import { Session } from "next-auth";

// type UserData = {
//   name: string;
//   email: string;
//   image: string;
// };

interface DashboardProps {
  session: Session;
}

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = {
  colors: [theme.colors.red[500]],
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xAxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-03-18T00:00:00.000Z",
      "2021-03-19T00:00:00.000Z",
      "2021-03-20T00:00:00.000Z",
      "2021-03-21T00:00:00.000Z",
      "2021-03-22T00:00:00.000Z",
      "2021-03-23T00:00:00.000Z",
      "2021-03-24T00:00:00.000Z",
    ],
  },
  fill: {
    colors: [theme.colors.red[500]],
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  {
    name: "series1",
    data: [31, 120, 10, 28, 51, 18, 109],
  },
];

export default function Dashboard({ session }: DashboardProps) {
  const router = useRouter();

  useEffect(() => {
    if (!session?.user) {
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
          <Chart options={options} series={series} type="area" height={160} />
        </Box>
        <Box p="8" bg="gray.800" borderRadius={8} PB="4">
          <Text fontSize="lg" mb="4">
            Cintura
          </Text>
          <Chart options={options} series={series} type="area" height={160} />
        </Box>
        <Box p="8" bg="gray.800" borderRadius={8} PB="4">
          <Text fontSize="lg" mb="4">
            Pescoço
          </Text>
          <Chart options={options} series={series} type="area" height={160} />
        </Box>
        <Box p="8" bg="gray.800" borderRadius={8} PB="4">
          <Text fontSize="lg" mb="4">
            Quadril
          </Text>
          <Chart options={options} series={series} type="area" height={160} />
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

  if (!session?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
