import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'
import { useToast } from './context/ToastContext'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ToastDemo() {
  const { addToast } = useToast()
  const [message, setMessage] = useState("This is a toast message!")
  const [selectedType, setSelectedType] = useState('success')
  const [autoDismiss, setAutoDismiss] = useState(true)
  const [position, setPosition] = useState('bottom-right')
  const [delay, setDelay] = useState(3000)

  const handleAddToast = () => {
    addToast({
      type: selectedType,
      message: message,
      duration: autoDismiss ? delay : 0,
      position: position
    })
  }

  return (
    <Card className="w-full max-w-md border-zinc-800 bg-zinc-950 text-zinc-100">
      <CardHeader>
        <CardTitle className="text-2xl">React Toast Notifications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Previous input fields and radio buttons remain the same */}
        
        <div className="space-y-2">
          <Label htmlFor="message" className="text-zinc-100">Message:</Label>
          <Input
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-zinc-900 border-zinc-800 text-zinc-100"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-zinc-100">Type:</Label>
          <RadioGroup
            value={selectedType}
            onValueChange={setSelectedType}
            className="flex flex-wrap gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="success" 
                id="success"
                className="h-4 w-4 rounded-full border border-white/50 data-[state=checked]:border-white data-[state=checked]:before:bg-white"
              />
              <Label htmlFor="success" className="text-white">Success</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="error" 
                id="error"
                className="h-4 w-4 rounded-full border border-white/50 data-[state=checked]:border-white data-[state=checked]:before:bg-white"
              />
              <Label htmlFor="error" className="text-white">Error</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="warning" 
                id="warning"
                className="h-4 w-4 rounded-full border border-white/50 data-[state=checked]:border-white data-[state=checked]:before:bg-white"
              />
              <Label htmlFor="warning" className="text-white">Warning</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="info" 
                id="info"
                className="h-4 w-4 rounded-full border border-white/50 data-[state=checked]:border-white data-[state=checked]:before:bg-white"
              />
              <Label htmlFor="info" className="text-white">Info</Label>
            </div>
          </RadioGroup>
          </div>

        <div className="space-y-2">
          <Label htmlFor="position" className="text-zinc-100">Position:</Label>
          <Select value={position} onValueChange={setPosition}>
            <SelectTrigger className="bg-zinc-900 border-zinc-800 text-zinc-100">
              <SelectValue placeholder="Select position" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="top-left">Top Left</SelectItem>
              <SelectItem value="top-right">Top Right</SelectItem>
              <SelectItem value="top-center">Top Center</SelectItem>
              <SelectItem value="bottom-left">Bottom Left</SelectItem>
              <SelectItem value="bottom-right">Bottom Right</SelectItem>
              <SelectItem value="bottom-center">Bottom Center</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="delay" className="text-zinc-100">Delay (ms):</Label>
          <Input
            id="delay"
            type="number"
            value={delay}
            onChange={(e) => setDelay(Number(e.target.value))}
            min={0}
            step={500}
            className="bg-zinc-900 border-zinc-800 text-zinc-100"
          />
        </div>
        <div className="flex items-center justify-between">
  <Button
    onClick={handleAddToast}
    variant="default"
  >
    Show Toast
  </Button>
  <div className="flex items-center space-x-2">
    <Switch
      id="auto-dismiss"
      checked={autoDismiss}
      onCheckedChange={setAutoDismiss}
      className="relative h-6 w-9 cursor-pointer rounded-full transition-colors duration-200 ease-in-out data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-zinc-600"
    >
      <span 
        className={`absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white transition-transform duration-200 ${
          autoDismiss ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </Switch>
    <Label htmlFor="auto-dismiss" className="text-zinc-100">
      Auto-dismiss
    </Label>
  </div>
</div> 
        
      </CardContent>
    </Card>
  )
}