import { Button, Flex, Stack } from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import { FormEvent, useEffect, useState } from "react";
import { Input } from "../components/Form/Input";

export default function Login() {
  const [session] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      router.push(`/dashboard`);
    }
  }, [session]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await signIn("credentials", {
      callbackUrl: "/dashboard",
      redirect: false,
      email,
      password,
    });
  }

  return (
    <Flex width="100vw" height="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        backgroundColor="gray.800"
        padding="8"
        borderRadius="8"
        flexDirection="column"
        onSubmit={handleSignIn}
      >
        <Stack spacing="4">
          <Input
            type="email"
            name="email"
            label="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            type="password"
            name="password"
            label="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Stack>
        <Button type="submit" marginTop="6" colorScheme="red" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
