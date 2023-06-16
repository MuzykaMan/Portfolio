import Concept from "./Concept";

interface Level {
    title: string;
    concepts: Concept[];
    image?: string;
    description?: string;
}

export default Level