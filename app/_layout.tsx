import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import "../global.css";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Função que define as rotas públicas
const PublicRoutes = () => {
  return (
    <>
      <Stack.Screen name="auth/login" options={{ title: "Login" }} />
      <Stack.Screen
        name="introduction/index"
        options={{ title: "Introduction" }}
      />
      {/* Aqui você pode adicionar outras rotas públicas */}
    </>
  );
};

// Função que define as rotas privadas
const PrivateRoutes = () => {
  return (
    <>
      <Stack.Screen name="index" options={{ title: "Home" }} />

      {/* Outras rotas privadas aqui */}
    </>
  );
};

export default function RootLayout() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // Função para simular a checagem de autenticação
  useEffect(() => {
    const checkAuth = () => {
      const token = AsyncStorage.getItem("token"); // Substitua pela lógica de autenticação real
      setIsAuthenticated(!!token);
    };
    checkAuth();
  }, []);

  // Redireciona para login caso o usuário não esteja autenticado
  useEffect(() => {
    if (isAuthenticated === false) {
      router.replace("/introduction/Index"); // Caminho para a tela de login
    }
  }, [isAuthenticated, router]);

  // Enquanto o estado de autenticação não for definido, exibe uma tela de carregamento ou nada
  if (isAuthenticated === null) {
    return null; // Exiba algo enquanto espera pela resposta de autenticação
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Se o usuário estiver autenticado, renderiza as rotas privadas */}
      {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </Stack>
  );
}
