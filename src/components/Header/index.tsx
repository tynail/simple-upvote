import { Card, Container, Row, Text } from "@nextui-org/react";

export interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <Container>
      <Card css={{ $$cardColor: "$colors$primary" }}>
        <Card.Body>
          <Row justify="center">
            <Text
              weight="bold"
              css={{
                textGradient: "45deg, $purple200 -10%, $pink600 90%",
              }}
              size="$6xl"
              color="gradient"
              h1
            >
              {title}
            </Text>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
