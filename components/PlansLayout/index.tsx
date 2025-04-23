import { PlanCardPros } from "@/types/types";
import React from "react";
import { ScrollView, View } from "react-native";
import PlanCard from "../PlanCard";
import { useRouter } from "expo-router";

const PlansLayout = () => {
  const router = useRouter();
  let layotOptions: PlanCardPros[] = [
    {
      planName: "Plano Gratuito",
      planType: "Essencial",
      planRecomend: null,
      lastPlanValue: "00,00",
      actualValue: "00,00",
      advantages: [
        "Tudo do plano gratuito",
        "Tudo do plano gratuito",
        "Tudo do plano gratuito",
        "Tudo do plano gratuito",
      ],
      handleClick() {
        router.push("/auth/Login/Login");
      },
    },
    {
      planName: "Plano",
      planType: "Pro",
      planRecomend: "RECOMENDADO",
      lastPlanValue: "79,90",
      actualValue: "59,80",
      advantages: [
        "Tudo do avançado",
        "Cronograma Automático",
        "Sincronicação com smartwatch",
        "Temas personalizados",
      ],
      handleClick() {
        console.log("Hello world");
      },
    },
    {
      planName: "Plano",
      planType: "Avançado",
      planRecomend: "MAIS POPULAR",
      lastPlanValue: "49,90",
      actualValue: "35,90",
      advantages: [
        "Tudo do plano gratuito",
        "Tudo do plano gratuito",
        "Tudo do plano gratuito",
        "Tudo do plano gratuito",
      ],
      handleClick() {},
    },
  ];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View
        className="flex flex-row  mt-2 gap w-full overflow-auto"
        style={{ gap: 20 }}
      >
        {layotOptions.map((plan, index) => (
          <PlanCard
            actualValue={plan.actualValue}
            advantages={plan.advantages}
            handleClick={plan.handleClick}
            lastPlanValue={plan.lastPlanValue}
            planName={plan.planName}
            planRecomend={plan.planRecomend}
            planType={plan.planType}
            key={index}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default PlansLayout;
