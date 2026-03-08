// main.js - Clean & Unobfuscated Version
document.addEventListener("DOMContentLoaded", () => {
    // تعريف العناصر في واجهة المستخدم
    const startButton = document.getElementById("start-btn");
    const usernameInput = document.getElementById("snap-username");
    const statusText = document.getElementById("status-text");
    const progressBar = document.getElementById("progress-bar");
    const loadingSection = document.getElementById("loading-section");
    const verifySection = document.getElementById("verify-section");
    const verifyButton = document.getElementById("verify-btn");

    // رابط عروض CPA (رابط الربح الخاص بك)
    const CPA_LINK = "https://your-cpa-link-here.com";

    // خطوات الاختراق الوهمي التي ستظهر للضحية (تُسحب من translations.js في العادة)
    const processSteps = [
        "Connecting to Snapchat servers...",
        "Locating user account...",
        "Bypassing 2FA Authentication...",
        "Extracting chat logs and hidden snaps...",
        "Encrypting data transmission...",
        "Almost done... User will not be notified."
    ];

    if (startButton) {
        startButton.addEventListener("click", () => {
            const username = usernameInput.value.trim();
            
            if (username === "") {
                alert("Please enter a valid Snapchat username.");
                return;
            }

            // إخفاء قسم الإدخال وإظهار شريط التحميل
            document.getElementById("input-section").style.display = "none";
            loadingSection.style.display = "block";

            // بدء عملية الاختراق الوهمي
            startFakeProcess();
        });
    }

    if (verifyButton) {
        verifyButton.addEventListener("click", () => {
            // تحويل المستخدم إلى صفحة العروض عند الضغط على Verify
            window.location.href = CPA_LINK;
        });
    }

    function startFakeProcess() {
        let currentStep = 0;
        let progress = 0;

        // تحديث الخطوات كل ثانيتين ونصف
        const stepInterval = setInterval(() => {
            if (currentStep < processSteps.length) {
                statusText.innerText = processSteps[currentStep];
                currentStep++;
            }
        }, 2500);

        // تحديث شريط التحميل (من 0 إلى 100%)
        const progressInterval = setInterval(() => {
            progress += Math.floor(Math.random() * 5) + 1; // زيادة عشوائية
            if (progress >= 100) {
                progress = 100;
                clearInterval(progressInterval);
                clearInterval(stepInterval);
                
                // عند اكتمال التحميل بنجاح
                showVerification();
            }
            progressBar.style.width = progress + "%";
            progressBar.innerText = progress + "%";
        }, 300);
    }

    function showVerification() {
        setTimeout(() => {
            // إخفاء شريط التحميل وإظهار نافذة التحقق البشري المطلوبة للربح
            loadingSection.style.display = "none";
            verifySection.style.display = "block";
        }, 1000);
    }
});