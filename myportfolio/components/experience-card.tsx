import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export default function ExperienceCard({
  title,
  company,
  period,
  description,
  skills,
}: ExperienceCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg bg-gray-900 text-white">
      <CardHeader className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
            <p className="text-sm sm:text-base text-blue-400">{company}</p>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">{period}</p>
        </div>
      </CardHeader>

      <CardContent className="p-4 sm:p-6">
        <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-400 text-sm sm:text-base">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="text-white border-blue-400 text-xs sm:text-sm px-2 py-1"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
