/**
 * Smooth scroll to an element with optional focus
 */
export const smoothScrollToElement = (
  elementId: string,
  focusInputId?: string,
  offset: number = 100
) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    // Focus input after scroll completes (approximately 1s for smooth scroll)
    if (focusInputId) {
      setTimeout(() => {
        const inputElement = document.getElementById(
          focusInputId
        ) as HTMLTextAreaElement;
        if (inputElement) {
          inputElement.focus();
        }
      }, 1000);
    }
  }
};

/**
 * Open Zalo chat
 * On mobile: direct chat link
 * On desktop: show QR code or open Zalo app
 */
export const openZaloChat = (phoneNumber: string = '0978509729') => {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    // Mobile: Open Zalo chat directly
    const zaloUrl = `https://zalo.me/${phoneNumber}`;
    window.open(zaloUrl, '_blank');
  } else {
    // Desktop: Open Zalo chat or show QR
    const zaloUrl = `https://zalo.me/${phoneNumber}`;
    window.open(zaloUrl, '_blank');
  }
};
