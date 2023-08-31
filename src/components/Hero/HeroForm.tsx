import { Form } from '../../styles/elements';

export const HeroForm = () => {
    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const searchValue = formData.get('heroSearch') as string;
        console.log(searchValue);
    };

    return (
        <Form onSubmit={handleForm}>
            <input type="text" name="heroSearch" placeholder="Enter a state, city, or ZIP code" aria-label="search" />
            <button type="submit">search</button>
        </Form>
    );
};
