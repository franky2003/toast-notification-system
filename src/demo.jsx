import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'
import { useToast } from './context/ToastContext'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { globalStyles } from "./styles/global.js";

globalStyles()

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
                className="border-zinc-400 text-zinc-100 focus:ring-zinc-400"
              />
              <Label htmlFor="success" className="text-zinc-100">Success</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="error" 
                id="error"
                className="border-zinc-400 text-zinc-100 focus:ring-zinc-400"
              />
              <Label htmlFor="error" className="text-zinc-100">Error</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="warning" 
                id="warning"
                className="border-zinc-400 text-zinc-100 focus:ring-zinc-400"
              />
              <Label htmlFor="warning" className="text-zinc-100">Warning</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="info" 
                id="info"
                className="border-zinc-400 text-zinc-100 focus:ring-zinc-400"
              />
              <Label htmlFor="info" className="text-zinc-100">Info</Label>
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
              className="relative h-7 w-12 rounded-full transition-colors duration-200 ease-in-out data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-slate-200"
            >
              <div className="relative w-full h-full">
                <div 
                  className="block h-6 w-6 rounded-full bg-white shadow-lg transform transition-transform duration-200 ease-in-out data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5 absolute top-0.5" 
                  data-state={autoDismiss ? 'checked' : 'unchecked'} 
                />
              </div>
            </Switch>
            <Label htmlFor="auto-dismiss" className="text-zinc-100">Auto-dismiss</Label>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}