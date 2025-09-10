// Global Variables
let currentTheme = 'light';
let isRecording = false;
let recognition = null;
let chatHistory = JSON.parse(localStorage.getItem('chatHistory') || '[]');
let isOnline = navigator.onLine;

// DOM Elements
const elements = {
    themeToggle: null,
    sourceLang: null,
    targetLang: null,
    swapLangs: null,
    messageInput: null,
    sendBtn: null,
    voiceBtn: null,
    voiceIcon: null,
    messagesContainer: null,
    chatContainer: null,
    typingIndicator: null,
    exportBtn: null,
    offlineIndicator: null
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    elements.themeToggle = document.getElementById('themeToggle');
    elements.sourceLang = document.getElementById('sourceLang');
    elements.targetLang = document.getElementById('targetLang');
    elements.swapLangs = document.getElementById('swapLangs');
    elements.messageInput = document.getElementById('messageInput');
    elements.sendBtn = document.getElementById('sendBtn');
    elements.voiceBtn = document.getElementById('voiceBtn');
    elements.voiceIcon = document.getElementById('voiceIcon');
    elements.messagesContainer = document.getElementById('messagesContainer');
    elements.chatContainer = document.getElementById('chatContainer');
    elements.typingIndicator = document.getElementById('typingIndicator');
    elements.exportBtn = document.getElementById('exportBtn');
    elements.offlineIndicator = document.getElementById('offlineIndicator');

    initApp();
});
