const AuthLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="flex items-center justify-center h-full" suppressHydrationWarning={true}>
      {children}
    </div> 
  );
}
 
export default AuthLayout;