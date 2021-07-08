import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

import { FormEvent, useEffect, useState } from "react";

import { Button, Flex, Link as ChakraLink, Stack } from "@chakra-ui/react";
import { toast } from "react-toastify";

import { Input } from "../components/Form/Input";

export default function SignIn() {
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

    try {
      await signIn("credentials", {
        callbackUrl: "/dashboard",
        redirect: false,
        email,
        password,
      });
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <Flex width="100vw" height="100vh" direction="column" align="center" justify="center">
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

      <Link href="/signUp">
        <ChakraLink fontWeight="bold" fontSize="md" mt="7">Não tem conta? Fazer cadastro</ChakraLink>
      </Link>
    </Flex>
  );
}
