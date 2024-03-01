function CardProto({ Figure, Title, Text }) {
  return (
    <StyledStarCard>
      <Figure />
      <Title />
      <Text />
    </StyledStarCard>
  );
}

/**Паттерн используют, когда нужно задать общую базовую структуру для компонента, 
 * которую в последствии можно удобно и быстро изменить, редактируя только код в «Прототипе». */