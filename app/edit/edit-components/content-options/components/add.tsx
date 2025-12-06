import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Field,FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { useTopicData } from "../../topic-data-provider";

export function AddButton({topicId}:{topicId:string}) {

    const {refreshPages} = useTopicData()
    const [title, setTitle] = useState<string>('')

    const handleNewChild = async () => {
        try {
            await axios.put(`http://localhost:3001/topics/${topicId}/items`,{item:title})
            await refreshPages()
        } catch (error){
            console.error(error)
        }
    }

    const handleTitle = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleCancel = () => {
        setTitle('');
    };

    return (
        <DropdownMenu>
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
                    <Button className="w-[100px]" variant={'default'} onClick={handleNewChild}>
                        save
                    </Button>
                    <Button className="w-[100px]" variant={'outline'} onClick={handleCancel}>
                        cancel
                    </Button>
                </Field>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}