import { useMemo } from 'react';
import { usePropertiesData } from '../api/queries';
import { Card, CardSkeleton, Hero } from '../components';
import { Button, Form, Grid, Title, Wrapper } from '../styles/elements';

export const Typography = () => {
    const { data } = usePropertiesData('');
    const propertiesData = useMemo(() => {
        return data && data.length > 0 ? data : [];
    }, [data]);

    return (
        <>
            <Hero />
            <Wrapper>
                <Title as="h2">Cards</Title>
                <Grid>
                    <Card data={propertiesData[0]} />
                    <Card data={propertiesData[0]} />
                    <Card data={propertiesData[0]} />
                    <Card data={propertiesData[0]} />
                    <Card data={propertiesData[0]} />
                    <Card data={propertiesData[0]} />
                    <Card data={propertiesData[0]} />
                    <Card data={propertiesData[0]} />
                </Grid>
            </Wrapper>
            <Wrapper>
                <Title as="h2">Cards Skeleton</Title>
                <Grid>
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                </Grid>
            </Wrapper>

            <Wrapper>
                <h2>Form</h2>
                <Form>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" placeholder="Full Name" id="fullName" />
                    <label htmlFor="emailAddress">Email Address</label>
                    <input type="email" placeholder="Email Address" id="emailAddress" />
                    <label htmlFor="number">Number</label>
                    <input type="number" placeholder="number" id="number" />
                    <label htmlFor="file">File</label>
                    <input type="file" placeholder="file" id="file" />
                    <input type="button" value="Create Account" />
                    <label htmlFor="checkbox">checkbox</label>
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <label htmlFor="checkbox"> radio</label>
                    <input type="radio" name="radio" id="radio" />
                    <select name="select" id="select">
                        <option value="option"> option 1</option>
                        <option value="option"> option 2</option>
                        <option value="option"> option 3</option>
                        <option value="option"> option 4</option>
                        <option value="option"> option 5</option>
                    </select>
                    <textarea name="textarea" id="textarea" placeholder="Text Area" />
                </Form>
                <Button shadow>Join Group</Button>
                <Button secondary>login</Button>
                <Button>Sign Up</Button>
            </Wrapper>
            <Wrapper>
                <h2>buttons</h2>
                <Button shadow>Join Group</Button>
                <Button secondary>login</Button>
                <Button>Sign Up</Button>
            </Wrapper>
        </>
    );
};
