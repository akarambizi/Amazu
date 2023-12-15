import { Form } from '../../styles/elements';
import { useNavigate } from 'react-router-dom';

export const HeroForm = () => {
    const navigate = useNavigate();

    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const searchValue = formData.get('heroSearch') as string;
        navigate(`/search?searchValue=${searchValue}`);
    };

    return (
        <Form data-testid="hero-form" onSubmit={handleForm}>
            <input type="text" name="heroSearch" placeholder="Enter a state, city, or ZIP code" aria-label="search" />
            <button type="submit">search</button>
        </Form>
    );
};
