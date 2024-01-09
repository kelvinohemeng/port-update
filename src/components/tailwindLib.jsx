export const Container = ({ children, className }) => {
  return (
    <div className="container mx-auto h-full px-4 md:px-2">
      <div className={className}>{children}</div>
    </div>
  );
};
