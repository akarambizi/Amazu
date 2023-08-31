import { Form } from '../../styles/elements';

export const HeroForm = () => {
    return (
        <Form>
            <input type="text" name="search" placeholder="Enter a state, city, or ZIP code" aria-label="search" />
            <button type="submit">search</button>
        </Form>
    );
};
