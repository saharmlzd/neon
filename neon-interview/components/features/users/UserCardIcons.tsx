import { Mail, Building2, MapPin, ChevronRight } from 'lucide-react';

export function EmailIcon() {
  return (
    <Mail className="h-4 w-4 flex-shrink-0 text-gray-500 dark:text-gray-400" />
  );
}

export function CompanyIcon() {
  return (
    <Building2 className="h-4 w-4 flex-shrink-0 text-gray-500 dark:text-gray-400" />
  );
}

export function LocationIcon() {
  return <MapPin className="h-3.5 w-3.5" />;
}

export function ArrowIcon() {
  return <ChevronRight className="h-3 w-3" />;
}
