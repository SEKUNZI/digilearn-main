import { useState } from "react";
import { Play, Pause, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { videos, Video } from "@/data/videos";

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<Video>(videos[0]);
  const [playing, setPlaying] = useState(false);

  const handleVideoSelect = (v: Video) => {
    setActiveVideo(v);
    setPlaying(false);
  };

  return (
    <div className="animate-fade-in">
      <div className="gradient-primary px-5 pt-12 pb-6 rounded-b-3xl">
        <h1 className="text-xl font-bold text-primary-foreground">Videos</h1>
        <p className="text-primary-foreground/70 text-sm mt-1">Watch and learn at your own pace</p>
      </div>

      {/* Video Player */}
      <div className="px-5 -mt-2">
        <Card className="border-0 shadow-lg overflow-hidden rounded-2xl">
          <div className="relative bg-foreground/90 aspect-video">
            <video
              key={activeVideo.id}
              className="w-full h-full object-cover"
              controls
              poster={activeVideo.thumbnail}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            >
              <source src={activeVideo.url} type="video/mp4" />
            </video>
          </div>
          <CardContent className="p-3">
            <h3 className="font-semibold text-card-foreground text-sm">{activeVideo.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="secondary" className="text-[10px]">{activeVideo.category}</Badge>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Eye size={12} /> {activeVideo.views.toLocaleString()}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Video List */}
      <div className="px-5 mt-5 space-y-3 pb-4">
        <h2 className="font-semibold text-foreground text-sm">All Tutorials</h2>
        {videos.map((v) => (
          <Card
            key={v.id}
            className={`cursor-pointer border-0 shadow-sm transition-shadow hover:shadow-md ${
              v.id === activeVideo.id ? "ring-2 ring-secondary" : ""
            }`}
            onClick={() => handleVideoSelect(v)}
          >
            <CardContent className="p-0 flex gap-3">
              <div className="relative w-28 h-20 shrink-0 rounded-l-lg overflow-hidden">
                <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center">
                  <Play size={20} className="text-primary-foreground" fill="white" />
                </div>
                <span className="absolute bottom-1 right-1 bg-foreground/70 text-primary-foreground text-[10px] px-1.5 py-0.5 rounded">
                  {v.duration}
                </span>
              </div>
              <div className="py-2 pr-3 flex flex-col justify-center">
                <h3 className="text-xs font-semibold text-card-foreground leading-tight">{v.title}</h3>
                <div className="flex items-center gap-2 mt-1.5">
                  <Badge variant="secondary" className="text-[9px] px-1.5 py-0">{v.category}</Badge>
                  <span className="text-[10px] text-muted-foreground">{v.views.toLocaleString()} views</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
