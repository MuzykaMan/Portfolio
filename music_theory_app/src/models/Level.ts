import Concept from "./Concept";

interface Level {
    id: number;
    title: string;
    concepts: Concept[];
    image?: string;
    description?: string;
}

export default Level