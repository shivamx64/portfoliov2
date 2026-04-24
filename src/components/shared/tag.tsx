import { Badge } from "@/components/ui/badge";

type TagProps = {
  children: React.ReactNode;
};

export function Tag({ children }: TagProps) {
  return <Badge variant="outline">{children}</Badge>;
}
