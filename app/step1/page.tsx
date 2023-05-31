import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { AuthLayout } from "@/app/components/AuthLayout";
import WizardLayout from "@/app/components/WizardLayout";
import TextArea from "@/app/step1/TextArea";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getServerSession(authOptions);
  const token = session?.user.token as string;
  const companyLogo = "/linkusLogo.svg";

  if (!session) {
    redirect("/");
  }

  return (
    <AuthLayout token={token} companyLogo={companyLogo}>
      <WizardLayout>
        <TextArea />
      </WizardLayout>
    </AuthLayout>
  );

  // TODO: affinda integration;
  // const router = useRouter();
  // const [error, setError] = useState<string | undefined | DocumentError >();
  // const [isLoading, setIsLoading] = useState(false);
  // const fileInputRef = useRef<HTMLInputElement>(null);
  // const { data: session, status } = useSession({
  //   required: true,
  // });

  // const handleSignOut = () => {
  //   signOut();

  // };

  // const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //           if (file) {
  //             setError(undefined);
  //             setIsLoading(true);
  //             const res = await affindaClient.createDocument({
  //               file,
  //               workspace: "boZlKmiN",
  //               collection: "iojESxXj"
  //             })
  //             if (res.error) {
  //               setError(res.error);
  //             }
  //             setIsLoading(false);
  //             console.log(res);
  //             if (fileInputRef.current) {
  //               fileInputRef.current.value = "";
  //             }
  //           }
  // }

  // if (session) {
  //   const currentUser = getCurrentUser(session);
  // }

  // if (status === "loading" || !session) {
  //   return <Loader />;
  // }

  // return (
  //   <>
  //     <TopBar />
  //     <div className="flex gap-2">
  //       <p> welcome to client protected page </p>
  //       <div className=" w-1/2">{session?.user?.iat}</div>
  //       <button
  //         onClick={() => {
  //           handleSignOut();
  //         }}
  //       >
  //         Sign Out
  //       </button>
  //     </div>
  //     <div>
  //     <input
  //         type="file"
  //         className="file-input-bordered file-input-primary file-input w-full max-w-xs"
  //         accept=".doc, .docx, .pdf"
  //         ref={fileInputRef}
  //         onChange={handleUpload}
  //       />
  //     </div>
  //   </>
  // );
};

export default Page;
