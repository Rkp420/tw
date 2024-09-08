import { SignUp, useSignUp } from "@clerk/nextjs";

export default function Page() {
  return <SignUp />;
}



/**
 * const router = useRouter();
  const { signUp, isLoaded } = useSignUp();

  useEffect(() => {
    if (isLoaded && signUp?.status === "complete") {
      // Get the returnUrl from the query parameters
      const returnUrl = (router.query.returnUrl as string) || "/dashboard"; // Default route if no returnUrl
      router.push(returnUrl); // Redirect to the intended route
    }
  }, [signUp?.status, isLoaded, router]);
 */