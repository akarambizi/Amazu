import React from 'react';
import styled from 'styled-components';
import { Text } from '../../styles/elements';

const CommentMain = styled.section`
    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
`;
function Comment() {
    return (
        <CommentMain>
            <div>
                <img src="https://images.unsplash.com/photo-1560205001-a7011fc0093c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="user" />
                <Text>User name</Text>
                <Text>2 Days Ago</Text>
                <Text>Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. Ut enim ad minim veniam, quis nostrud exercitation</Text>
            </div>
            <div>
                <button type="button" aria-label="Like">
                    Like
                </button>
                <button type="button" aria-label="Reply">
                    Reply
                </button>
            </div>
        </CommentMain>
    );
}

export default Comment;
