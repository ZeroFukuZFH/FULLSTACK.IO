
import { Button } from "@/components/ui/button"
import { TrashIcon } from "lucide-react"

export function DeleteButton() {
  return (
    <Button variant="destructive" className="cursor-pointer">
    delete <TrashIcon size={16} />
    </Button>
  )
}
  