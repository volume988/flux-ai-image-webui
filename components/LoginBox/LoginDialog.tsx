import * as Dialog from "@radix-ui/react-dialog";
import SignInForm from "./LoginForm";

const LoginDialog = ({
  children,
  open,
  setOpen,
}: Readonly<{
  open: boolean;
  setOpen: (...arg: any) => void;
  children: React.ReactNode;
}>) => (
  <Dialog.Root open={open} onOpenChange={setOpen}>
    {/* <Dialog.Trigger asChild>{children}</Dialog.Trigger> */}
    <Dialog.Portal>
      <Dialog.Overlay className=" bg-black bg-opacity-45 data-[state=open]:animate-overlayShow fixed inset-0 z-[51]" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[51]">
        <SignInForm />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default LoginDialog;
