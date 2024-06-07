import * as Auth from 'aws-amplify/auth';
import * as API from 'aws-amplify/api';
import { useStore } from './store';
import { useToast } from '@/components/ui/use-toast';
import { UserGroup } from './models/UserGroup';

export const useSignIn = () => {
  const setLoggedIn = useStore((state) => state.setLoggedIn);
  const { toast } = useToast();

  return (input: Auth.SignInInput) => {
    return new Promise<{ success: boolean }>((resolve) => {
      Auth.signIn(input)
        .then(() => {
          setLoggedIn(true);
          resolve({ success: true });
        })
        .catch(() => {
          toast({
            title: 'Error',
            description:
              'An error occurred while signing in. Please try again.',
            variant: 'destructive',
          });
          resolve({ success: false });
        });
    });
  };
};

export const getUserGroups = async () => {
  try {
    const user = await Auth.fetchAuthSession();
    const groups = user.tokens?.accessToken.payload['cognito:groups'];
    return (groups as UserGroup[]) || [];
  } catch (error) {
    return [];
  }
};
