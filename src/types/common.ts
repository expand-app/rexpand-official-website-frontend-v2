export interface CMSImage {
  data: {
    id: number;
    attributes: {
      formats: {
        large: {
          url: string;
          name: string;
        };
      };
      name: string;
      url: string;
      width: number;
      height: number;
    };
  };
}
