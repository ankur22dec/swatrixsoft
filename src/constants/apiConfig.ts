const isLive = window.location.hostname.includes("cmarix");

export const API = isLive ? 'https://www.cmarix.com/blog/feed' : 'https://www.cmarix.com/blog/feed';

export const captchaKey = isLive ? '6LcgiNIZAAAAAGxsvhRMauFIH_DXAoOX2Sja_elE' : '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'

export const apiEndpoint = isLive ? 'https://cmarix.com:8080' : 'http://localhost:8002';

export const ipStack = '9cf381531468eef3530f09b699052045';