//public/js/toast.js

// Toast Notification Manager
class ToastManager {
    constructor(containerId = 'toastPanel') {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.id = containerId;
            this.container.className = 'toast-panel';
            document.body.appendChild(this.container);
        }
        this.activeToasts = new Map();
    }

    escapeHtml(str) {
        if (!str) return '';
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }

    show(type, title, message, duration = 5000) {
        const types = {
            success: 'success',
            error: 'error',
            warning: 'warning',
            help: 'help'
        };
        
        const toastType = types[type] || 'help';
        const displayTitle = title || this.getDefaultTitle(toastType);
        const displayMessage = message || this.getDefaultMessage(toastType);
        
        const toastId = 'toast_' + Date.now() + '_' + Math.random().toString(36).substr(2, 8);
        
        const toastItem = document.createElement('div');
        toastItem.className = `toast-item ${toastType}`;
        toastItem.id = toastId;
        
        toastItem.innerHTML = `
            <div class="toast ${toastType}">
                <div class="close-toast" data-toast-id="${toastId}"></div>
                <h3>${this.escapeHtml(displayTitle)}</h3>
                <p>${this.escapeHtml(displayMessage)}</p>
            </div>
        `;
        
        this.container.appendChild(toastItem);
        
        let timeoutId = null;
        
        const closeBtn = toastItem.querySelector('.close-toast');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeToast(toastId);
            });
        }
        
        if (duration > 0) {
            timeoutId = setTimeout(() => {
                this.closeToast(toastId);
            }, duration);
        }
        
        this.activeToasts.set(toastId, { element: toastItem, timeoutId });
        
        return toastId;
    }
    
    closeToast(toastId) {
        const toastInfo = this.activeToasts.get(toastId);
        if (toastInfo) {
            if (toastInfo.timeoutId) {
                clearTimeout(toastInfo.timeoutId);
            }
            const toastElement = toastInfo.element;
            toastElement.classList.add('closed');
            setTimeout(() => {
                if (toastElement && toastElement.parentNode) {
                    toastElement.parentNode.removeChild(toastElement);
                    this.activeToasts.delete(toastId);
                }
            }, 300);
        }
    }
    
    closeAll() {
        this.activeToasts.forEach((_, toastId) => {
            this.closeToast(toastId);
        });
    }
    
    getDefaultMessage(type) {
        const messages = {
            success: 'Operation completed successfully!',
            error: 'Something went wrong. Please try again.',
            warning: 'Please check your information.',
            help: 'Need assistance? Contact our support.'
        };
        return messages[type] || messages.help;
    }
    
    getDefaultTitle(type) {
        const titles = {
            success: 'Success!',
            error: 'Error!',
            warning: 'Warning!',
            help: 'Help!'
        };
        return titles[type] || 'Notification';
    }
    
    success(title, message, duration) {
        return this.show('success', title, message, duration);
    }
    
    error(title, message, duration) {
        return this.show('error', title, message, duration);
    }
    
    warning(title, message, duration) {
        return this.show('warning', title, message, duration);
    }
    
    help(title, message, duration) {
        return this.show('help', title, message, duration);
    }
}

// Initialize global toast manager when DOM is ready
let toastManager = null;

document.addEventListener('DOMContentLoaded', function() {
    toastManager = new ToastManager();
    window.toastManager = toastManager;
});