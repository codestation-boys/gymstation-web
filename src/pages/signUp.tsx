import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";

import { FormEvent, useEffect, useState } from "react";
import { Button, Flex, Select, Stack } from "@chakra-ui/react";
import { toast } from "react-toastify";

import { api } from "../services/api";

import { Input } from "../components/Form/Input";

export default function SignUp() {
  const [session] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      router.push(`/dashboard`);
    }
  }, [session]);

  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [dateBirth, setDateBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    if (password !== passwordConfirmation) {
      toast.error("As senhas não correspondem");
      return;
    }

    try {
      const [day, month, year] = dateBirth.split('/');
      const date_birth = new Date(Number(year), Number(month) - 1, Number(day)).toISOString();

      const userData = {
        name,
        email,
        password,
        gender,
        date_birth
      }

      await api.post("/accounts", userData, {
        headers: { 'Content-Type': 'application/json' }
      })

      toast.success("Cadastro concluído com sucesso");

      await signIn("credentials", {
        callbackUrl: "/dashboard",
        redirect: false,
        email,
        password,
      });

    } catch (err) {
      toast.error(err.response.data.message);
    }
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
        onSubmit={handleSignUp}
      >
        <Stack spacing="4">
          <Input
            name="name"
            label="Nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          
          <Select placeholder="Gênero" value={gender} onChange={(event) => setGender(event.target.value)}>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
          </Select>

          <Input
            name="dateBirth"
            mask="**/**/****"
            label="Data de nascimento"
            value={dateBirth}
            onChange={(event) => setDateBirth(event.target.value)}
          />

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

          <Input
            type="password"
            name="passwordConfirmation"
            label="Confirmação da senha"
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
          />
        </Stack>
        <Button type="submit" marginTop="6" colorScheme="red" size="lg">
          Cadastrar
        </Button>
      </Flex>
    </Flex>
  );
}
