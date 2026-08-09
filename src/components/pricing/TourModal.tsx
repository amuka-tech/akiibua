import { TourCategory } from "@/data/tours";
import { FcAkiiBuaMuseumArenaTourModal, MuseumOnlyModal, FallbackTourModal } from "./modals";

interface TourModalProps {
  tourId: string;
  activeTab: TourCategory;
  onClose: () => void;
}

export default function TourModal({ tourId, activeTab, onClose }: TourModalProps) {
  switch (tourId) {
    case "AkiiBua Museum + Arena Tour":
      return <FcAkiiBuaMuseumArenaTourModal activeTab={activeTab} closeModal={onClose} />;
    case "Museum Only":
      return <MuseumOnlyModal activeTab={activeTab} closeModal={onClose} />;
    default:
      return <FallbackTourModal tourId={tourId} closeModal={onClose} />;
  }
}
