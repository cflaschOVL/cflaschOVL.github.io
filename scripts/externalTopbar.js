window.addEventListener('DOMContentLoaded', function () {
    const BASE_URL = 'https://haltung.amainfo.at';
    // const BASE_URL = 'http://localhost:4200';

    const globalTopbarIframeWrapper = document.createElement('div');
    const globalTopbarIframe = document.createElement('iframe');
    const typo3Header = document.querySelector('.js-header');
    const typo3MainContent = document.querySelector('#main-content');
    const genussHeader = document.querySelector('.site-header');
    const genussHeaderInner = document.querySelector('.site-header-inner');
    const genussContent = document.querySelector('.snap');
    const topBarHeight = '34px';
    const topBarPosTop = genussHeader ? '0px' : '-' + topBarHeight;

    const genussLogoMobile = document.querySelector('.logo_mobile');

    if (typo3MainContent) {
        typo3MainContent.style.paddingTop = '0';
    }
    if (genussContent) {
        genussContent.style.paddingTop = '0';
    }

    globalTopbarIframeWrapper.style.width = '100%';
    globalTopbarIframeWrapper.style.height = topBarHeight;
    globalTopbarIframeWrapper.style.position = 'absolute';
    globalTopbarIframeWrapper.style.top = topBarPosTop;
    globalTopbarIframeWrapper.style.left = '0';
    globalTopbarIframeWrapper.style.zIndex = '999999999';
    globalTopbarIframeWrapper.style.overFlow = 'hidden';

    const origin = window.location.href.includes('amainfo.at/teilnehmer')
        ? 'https://amainfo.at/teilnehmer'
        : encodeURIComponent(window.location.origin);

    globalTopbarIframe.setAttribute(
        'src',
        `${BASE_URL}/external-topbar?externalTopbarOrigin=${origin}`,
    );
    globalTopbarIframe.setAttribute('scrolling', 'no');
    globalTopbarIframe.style.width = '100%';
    globalTopbarIframe.style.height = '100%';
    globalTopbarIframe.style.zIndex = '999999999';
    globalTopbarIframe.style.position = 'absolute';
    globalTopbarIframe.style.top = '0';
    globalTopbarIframe.style.left = '0';
    globalTopbarIframe.style.right = '0';
    globalTopbarIframe.style.bottom = '0';
    globalTopbarIframe.style.border = 'none';

    globalTopbarIframeWrapper.appendChild(globalTopbarIframe);
    document.body.insertBefore(
        globalTopbarIframeWrapper,
        document.body.firstChild,
    );

    function adjustStyles() {
        const genussIsMobile = window.innerWidth < 750 ? true : false;
        globalTopbarIframeWrapper.style.height = topBarHeight;
        globalTopbarIframeWrapper.style.top = topBarPosTop;

        if (typo3Header) {
            typo3Header.style.marginTop = topBarHeight;
            typo3Header.style.position = 'sticky';
        }
        if (genussHeader) {
            genussHeader.style.marginTop = topBarHeight;
            genussHeader.style.position = 'sticky';
            genussHeader.style.overflow = 'visible';
            genussHeader.style.height = '0px';
        }
        if (genussHeaderInner) {
            if (genussIsMobile) {
                genussHeaderInner.style.removeProperty('height');
            } else {
                genussHeaderInner.style.height = '60px';
            }
        }

        if (genussLogoMobile) {
            genussLogoMobile.style.top = '48px';
        }
    }

    adjustStyles();
    window.addEventListener('resize', adjustStyles);
});
window.addEventListener('message', handleMessage, false);
function handleMessage(event) {
    const BASE_URL = 'https://haltung.amainfo.at';
    // const BASE_URL = 'http://localhost:4200';
    if (event.origin != BASE_URL) {
        return;
    }

    if (event.data) {
        const urlRegex = /^(http|https):\/\/[^ "]+$/;

        if (urlRegex.test(event.data)) {
            window.location.href = event.data;
        }
    }
}
