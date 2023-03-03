import { Badge, Button, Container, Row, Spacer } from "@nextui-org/react";
import { Subject } from "../../interfaces/subject";

export interface SuggestionsProps {
  subjects: Subject[];
}

export default function Suggestions({ subjects }) {
  const addUpvote = (id: number) => {
    const oneSubject = subjects.find((s) => s.id === id);
    oneSubject.numberOfUpvotes += 1;
    // TODO: Update the backend
  };

  return (
    <Container>
      {subjects.map((subject: Subject) => {
        const { id, name, numberOfUpvotes } = subject;
        return (
          <Container key={id}>
            <Row justify="flex-start" align="center">
              <Badge key={id} size="lg" shape="rectangle">
                {name}
              </Badge>
              <Badge size="lg" shape="rectangle">
                {numberOfUpvotes}
              </Badge>
              <Spacer x={1} />
              <Button
                shadow
                size="xs"
                color="gradient"
                rounded
                auto
                ghost
                onClick={() => addUpvote(id)}
              >
                +
              </Button>
            </Row>
          </Container>
        );
      })}
    </Container>
  );
}
