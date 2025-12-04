import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Field,FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";

export function AddButton() {

    const [title, setTitle] = useState<string>('')

    const handleTitle = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleCancel = () => {
        setTitle('');
    };

  return <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="cursor-pointer">
                add children <Plus size={16} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-3">
                <Field>
                    <FieldLabel htmlFor="title">New Child Title</FieldLabel>
                    <Input 
                            id='title' 
                            value={title} 
                            onChange={handleTitle} 
                            autoComplete="off" 
                            placeholder="place your title here" 
                    />
                </Field>
                <Field orientation={'horizontal'} className="justify-end pt-3">
                            <Button className="w-[100px]" variant={'default'}>
                            save
                            </Button>
                            <Button className="w-[100px]" variant={'outline'} onClick={handleCancel}>
                            cancel
                            </Button>
                        </Field>
            </DropdownMenuContent>
        </DropdownMenu>;
}
  