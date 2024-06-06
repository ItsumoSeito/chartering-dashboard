import * as Auth from 'aws-amplify/auth';
import { useStore } from './store';
import { useToast } from '@/components/ui/use-toast';

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
