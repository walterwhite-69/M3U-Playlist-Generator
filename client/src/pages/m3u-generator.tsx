import React, { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTheme } from "@/components/theme-provider"
import { 
  Moon, 
  Sun, 
  Tv, 
  Image, 
  Link, 
  Folder, 
  Code, 
  Copy, 
  Download, 
  Trash2,
  Radio,
  Rocket,
  Shield,
  Smartphone
} from "lucide-react"

export default function M3UGenerator() {
  const { theme, setTheme } = useTheme()
  
  const [channelNames, setChannelNames] = useState("")
  const [logoUrls, setLogoUrls] = useState("")
  const [channelUrls, setChannelUrls] = useState("")
  const [groupName, setGroupName] = useState("")
  const [generatedM3U, setGeneratedM3U] = useState("")

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedChannelNames = localStorage.getItem('m3u-channel-names')
    const savedLogoUrls = localStorage.getItem('m3u-logo-urls')
    const savedChannelUrls = localStorage.getItem('m3u-channel-urls')
    const savedGroupName = localStorage.getItem('m3u-group-name')
    
    if (savedChannelNames) setChannelNames(savedChannelNames)
    if (savedLogoUrls) setLogoUrls(savedLogoUrls)
    if (savedChannelUrls) setChannelUrls(savedChannelUrls)
    if (savedGroupName) setGroupName(savedGroupName)
  }, [])

  // Save to localStorage whenever values change
  useEffect(() => {
    localStorage.setItem('m3u-channel-names', channelNames)
  }, [channelNames])

  useEffect(() => {
    localStorage.setItem('m3u-logo-urls', logoUrls)
  }, [logoUrls])

  useEffect(() => {
    localStorage.setItem('m3u-channel-urls', channelUrls)
  }, [channelUrls])

  useEffect(() => {
    localStorage.setItem('m3u-group-name', groupName)
  }, [groupName])

  // Clear generated M3U when inputs change
  useEffect(() => {
    setGeneratedM3U("")
  }, [channelNames, logoUrls, channelUrls, groupName])

  const generateM3U = () => {
    const names = channelNames.split(',').map(s => s.trim()).filter(s => s)
    const logos = logoUrls.split(',').map(s => s.trim()).filter(s => s)
    const urls = channelUrls.split(',').map(s => s.trim()).filter(s => s)
    const groups = groupName.split(',').map(s => s.trim())

    let m3uContent = ''
    
    for (let i = 0; i < names.length; i++) {
      const logo = logos[i] || ''
      const groupTitle = groups[i] || groups[0] || ''
      const name = names[i] || ''
      const url = urls[i] || ''
      
      m3uContent += `#EXTINF:-1 tvg-logo="${logo}" group-title="${groupTitle}", ${name}\n`
      m3uContent += `${url}\n`
      if (i < names.length - 1) m3uContent += '\n'
    }

    setGeneratedM3U(m3uContent)
  }

  const handleCopy = async () => {
    if (!generatedM3U) return
    await navigator.clipboard.writeText(generatedM3U)
  }

  const handleDownload = () => {
    if (!generatedM3U) return
    
    const blob = new Blob([generatedM3U], { type: 'audio/x-mpegurl' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'playlist.m3u'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleClear = () => {
    setChannelNames("")
    setLogoUrls("")
    setChannelUrls("")
    setGroupName("")
    setGeneratedM3U("")
    
    // Clear localStorage data
    localStorage.removeItem('m3u-channel-names')
    localStorage.removeItem('m3u-logo-urls')
    localStorage.removeItem('m3u-channel-urls')
    localStorage.removeItem('m3u-group-name')
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="atmospheric-bg min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Button 
          onClick={toggleTheme}
          variant="ghost"
          size="icon"
          className="glass-effect p-3 rounded-full text-gray-700 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-110"
          data-testid="button-theme-toggle"
        >
          {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </Button>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col min-h-screen">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center p-3 mb-6 bg-indigo-500/20 rounded-full">
            <Radio className="h-8 w-8 text-indigo-400" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
            M3U Generator
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Professional playlist creator with atmospheric interface. Generate M3U files with ease.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full mx-auto flex-1">
          {/* Input Form */}
          <Card className="glass-effect border-0 animate-fade-in w-full" data-testid="card-input-form">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center mb-6">
                <Tv className="h-6 w-6 text-indigo-400 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Channel Information</h2>
              </div>
              
              <div className="space-y-6">
                {/* Channel Names */}
                <div className="input-group">
                  <Label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Tv className="h-4 w-4 mr-2" />
                    Channel Names
                  </Label>
                  <Textarea 
                    value={channelNames}
                    onChange={(e) => setChannelNames(e.target.value)}
                    placeholder="Enter channel names separated by commas&#10;e.g., Asia TV, Jamuna TV, Channel 24"
                    rows={3}
                    className="w-full bg-white dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500/20"
                    data-testid="input-channel-names"
                  />
                </div>

                {/* Logo URLs */}
                <div className="input-group">
                  <Label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Image className="h-4 w-4 mr-2" />
                    Logo URLs
                  </Label>
                  <Textarea 
                    value={logoUrls}
                    onChange={(e) => setLogoUrls(e.target.value)}
                    placeholder="Enter logo URLs separated by commas&#10;e.g., https://example.com/logo1.png, https://example.com/logo2.png"
                    rows={3}
                    className="w-full bg-white dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500/20"
                    data-testid="input-logo-urls"
                  />
                </div>

                {/* Channel URLs */}
                <div className="input-group">
                  <Label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Link className="h-4 w-4 mr-2" />
                    Channel URLs
                  </Label>
                  <Textarea 
                    value={channelUrls}
                    onChange={(e) => setChannelUrls(e.target.value)}
                    placeholder="Enter channel URLs separated by commas&#10;e.g., https://stream1.com/live, https://stream2.com/live"
                    rows={3}
                    className="w-full bg-white dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500/20"
                    data-testid="input-channel-urls"
                  />
                </div>

                {/* Group Name */}
                <div className="input-group">
                  <Label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Folder className="h-4 w-4 mr-2" />
                    Group Name (Optional)
                  </Label>
                  <Input 
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    placeholder="e.g., Bangladeshi Channels"
                    className="w-full bg-white dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500/20"
                    data-testid="input-group-name"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button 
                    onClick={generateM3U}
                    className="btn-primary flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500"
                    data-testid="button-generate"
                  >
                    <Radio className="h-4 w-4 mr-2" />
                    Generate M3U
                  </Button>
                  
                  <Button 
                    onClick={handleClear}
                    variant="outline"
                    className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                    data-testid="button-clear"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preview & Download */}
          <Card className="glass-effect border-0 animate-fade-in w-full" data-testid="card-preview">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Code className="h-6 w-6 text-cyan-400 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">M3U Preview</h2>
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={handleCopy}
                    disabled={!generatedM3U}
                    variant="outline"
                    size="icon"
                    className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 disabled:opacity-50"
                    data-testid="button-copy"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button 
                    onClick={handleDownload}
                    disabled={!generatedM3U}
                    size="icon"
                    className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50"
                    data-testid="button-download"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="h-96" data-testid="preview-container">
                {generatedM3U ? (
                  <div className="code-preview h-full">
                    <pre className="text-sm leading-relaxed">{generatedM3U}</pre>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                    <div className="text-center">
                      <Code className="h-16 w-16 mb-4 opacity-50 mx-auto" />
                      <p className="text-lg text-gray-600 dark:text-gray-400">Fill in the form to generate M3U preview</p>
                      <p className="text-sm mt-2 opacity-75 text-gray-500 dark:text-gray-500">Your playlist will appear here</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 w-full max-w-4xl mx-auto">
          <Card className="glass-effect border-0 animate-fade-in">
            <CardContent className="p-6 text-center">
              <Rocket className="h-8 w-8 text-indigo-400 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Instant Generation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Create M3U files in seconds with our powerful generator</p>
            </CardContent>
          </Card>
          
          <Card className="glass-effect border-0 animate-fade-in">
            <CardContent className="p-6 text-center">
              <Shield className="h-8 w-8 text-green-400 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Secure & Private</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">All processing happens locally in your browser</p>
            </CardContent>
          </Card>
          
          <Card className="glass-effect border-0 animate-fade-in">
            <CardContent className="p-6 text-center">
              <Smartphone className="h-8 w-8 text-purple-400 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Fully Responsive</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Works perfectly on all devices and screen sizes</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Made By Walter - Signature */}
        <div className="mt-12 mb-6 text-center w-full">
          <div className="walter-signature text-lg font-mono relative inline-block">
            <span className="walter-main">Made By Walter</span>
            <span className="walter-glitch walter-glitch-1" aria-hidden="true">Made By Walter</span>
            <span className="walter-glitch walter-glitch-2" aria-hidden="true">Made By Walter</span>
            <span className="walter-matrix" aria-hidden="true">M4d3 8y W4lt3r</span>
          </div>
        </div>
      </div>
    </div>
  )
}
