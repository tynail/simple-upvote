import { Badge, Button, Container, Row, Spacer } from "@nextui-org/react";
import { Subject } from "../../interfaces/subject";

export interface SuggestionsProps {
  subjects: Subject[];
}

export default function Suggestions({ subjects }) {
  return (
    <Container>
      {subjects.map((subject: Subject) => {
        const { id, name } = subject;
        return (
          <Container>
            <Row justify="flex-start" align="center">
              <Badge key={id} size="lg" shape="rectangle">
                {name}
              </Badge>
              <Spacer x={1} />
              <Button shadow size="xs" color="gradient" rounded auto ghost>
                +
              </Button>
            </Row>
          </Container>
        );
      })}
    </Container>
  );
}
