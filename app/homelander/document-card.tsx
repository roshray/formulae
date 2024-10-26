import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Doc } from "@/convex/_generated/dataModel";
import { Eye } from "lucide-react";

export default function DocumentCard({document}: {document: Doc<'documents'>}) {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>{document.title}</CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <Button variant="secondary" className="flex items-center gap-2">
                        <Eye />
                        View
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}