'use client';

import React, { useEffect, useState } from 'react';
import { Button, buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import * as Auth from 'aws-amplify/auth';
import { useToast } from './ui/use-toast';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import SignInForm from './forms/SingInForm';
import SignUpForm from './forms/SingUpForm';
import { useStore } from '@/lib/store';
import { getUserGroups } from '@/lib/auth';

const AuthControls = () => {
  const { loggedIn, setLoggedIn, setUserGroups } = useStore((state) => ({
    loggedIn: state.loggedIn,
    userGroups: state.userGroups,
    setLoggedIn: state.setLoggedIn,
    setUserGroups: state.setUserGroups,
  }));
  const [signInDialogOpen, setSignInDialogOpen] = useState(false);
  const [signupDialogOpen, setSignUpDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleSignOut = () => {
    Auth.signOut()
      .then(() => {
        setLoggedIn(false);
        toast({
          title: 'Signed out',
          description: 'You have been successfully signed out',
          variant: 'success',
        });
      })
      .catch(() => {
        toast({
          title: 'Error',
          description: 'An error occurred while signing out',
          variant: 'destructive',
        });
      });
  };

  useEffect(() => {
    Auth.getCurrentUser()
      .then(() => setLoggedIn(true))
      .catch(() => setLoggedIn(false));
  }, [setLoggedIn]);

  useEffect(() => {
    (async () => {
      const userGroups = await getUserGroups();
      setUserGroups(userGroups);
    })();
  }, [loggedIn, setUserGroups]);

  const classes = cn(buttonVariants({ variant: 'outline' }), 'rounded-2xl');

  return !loggedIn ? (
    <>
      <Dialog open={signInDialogOpen} onOpenChange={setSignInDialogOpen}>
        <DialogTrigger className={classes}>Sign in</DialogTrigger>
        <DialogContent className="bg-slate-800 min-h-56">
          <SignInForm closeDialog={() => setSignInDialogOpen(false)} />
        </DialogContent>
      </Dialog>
      <Dialog open={signupDialogOpen} onOpenChange={setSignUpDialogOpen}>
        <DialogTrigger className={classes}>Register</DialogTrigger>
        <DialogContent className="bg-slate-800 min-h-56">
          <SignUpForm closeDialog={() => setSignUpDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  ) : (
    <Button variant={'outline'} onClick={handleSignOut} className={classes}>
      Sign out
    </Button>
  );
};

export default AuthControls;
