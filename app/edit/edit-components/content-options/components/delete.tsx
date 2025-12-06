
import { Button } from "@/components/ui/button"
import { TrashIcon } from "lucide-react"
import axios from 'axios'
import { useTopicData } from "../../topic-data-provider";

export function DeleteButton({topicId}:{topicId:string}) {
  const { refreshPages } = useTopicData(); 

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/topics/${topicId}`);
      await refreshPages()
    } catch (error) {
        console.error(error)
    }
  }

  return (
    <Button variant="destructive" className="cursor-pointer" onClick={handleDelete}>
    delete <TrashIcon size={16} />
    </Button>
  )
}
  