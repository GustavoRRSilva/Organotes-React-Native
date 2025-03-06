import React from "react";
import { render } from "@testing-library/react-native"; // Caminho do seu componente
import { Loading } from "./Loading";
import { Animated } from "react-native";

describe("<Loading>", () => {
  it("should be render the componenet", () => {
    //Chamando pelo TestId do componenet
    const { getByTestId } = render(<Loading />);
    expect(getByTestId).toBeTruthy();
  });

  it("should be have the animated image", () => {
    render(<Loading />);
    const { getByTestId } = render(<Loading />);

    const animatedImage = getByTestId("loading-icon");

    //Verifica se a imagem da prop é a mesma escolhida no component
    expect(animatedImage.props.source).toEqual(require("@/public/loading.png"));
  });

  it("should be initiate the animation correctly", () => {
    //Puxa a animação pelo tipo escolhido no component de loading
    const spy = jest.spyOn(Animated, "timing");
    render(<Loading />);
    expect(spy).toHaveBeenCalled();
  });
});
