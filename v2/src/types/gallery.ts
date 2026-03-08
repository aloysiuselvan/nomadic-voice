export interface GalleryItem {
  id: string;
  imageUrl?: string;
  altText: string;
  colSpan?: number;
  isTextOverlay?: boolean;
  title?: string;
  customStyles?: React.CSSProperties;
}
