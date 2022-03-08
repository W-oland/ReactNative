import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';

export const useSignIn = () => {

    const [mutate, result] = useMutation(SIGN_IN);

    const signIn = async ({ username, password }) => {

        const { data } = await mutate({
            variables: {
                credentials: {
                    username, password
                }
            },
        });

        console.log(data);
        return data;
        
        //mutate({ variables: { username: username, password: password } });
        
    };

    return [signIn, result];
};