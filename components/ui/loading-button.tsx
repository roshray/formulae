import { Loader2 } from "lucide-react";
import { Button } from "./button";
import { ReactNode } from "react";

export default function LoadingButton(
    {
        isLoading,
        children,
        loadingText,
} : {
    isLoading: boolean;
    children: ReactNode;
    loadingText: string;

}) {
    return (
        <>
            <Button 
                  className="flex gap-1 items-center "
                  type="submit"
                  disabled={isLoading}
                >
                    {isLoading && <Loader2 className="animate-spin"/>}
                    {isLoading ? "Uploading..." : "Upload"}
            </Button>
        </>
    )
}