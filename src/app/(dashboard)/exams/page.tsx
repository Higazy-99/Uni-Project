"use client";

import React from 'react';
import PageHeader from '@/components/common/PageHeader';
import { toast } from 'sonner';

export default function ExamsPage() {
    const handlePrint = () => {
        toast.success("جاري تحضير الملف للطباعة...", {
            description: "سيتم تحميل ملف PDF لجدول الامتحانات."
        });
    };

    const handleReportConflict = () => {
        toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
            loading: 'جاري رفع الطلب...',
            success: 'تم رفع طلب التعارض بنجاح',
            error: 'حدث خطأ أثناء المحاولة'
        });
    };

    return (
        <>
            <PageHeader
                title="جدول الامتحانات النهائية"
                description="جدول مواعيد وقاعات الامتحانات للفصل الدراسي الحالي."
                breadcrumbs={[
                    { label: 'الرئيسية' },
                    { label: 'جدول الامتحانات' },
                ]}
                actions={
                    <button
                        onClick={handlePrint}
                        className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 font-bold py-2 px-4 rounded-xl shadow-sm transition-all flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined text-lg">print</span>
                        <span className="hidden sm:inline">طباعة الجدول</span>
                    </button>
                }
            />

            <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-xl p-4 flex items-start gap-3">
                <span className="material-symbols-outlined text-red-600 dark:text-red-400 mt-0.5">
                    warning
                </span>
                <div>
                    <h3 className="font-bold text-red-800 dark:text-red-300 text-sm">
                        تعليمات هامة للاختبارات
                    </h3>
                    <ul className="mt-1 space-y-1 text-xs text-red-700 dark:text-red-400 list-disc list-inside">
                        <li>يجب إحضار البطاقة الجامعية للدخول إلى قاعة الامتحان.</li>
                        <li>يمنع منعاً باتاً إدخال الهواتف المحمولة أو الساعات الذكية.</li>
                        <li>الحضور قبل موعد الاختبار بـ 15 دقيقة على الأقل.</li>
                    </ul>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-right text-slate-600 dark:text-slate-400">
                        <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-xs uppercase font-bold tracking-wider">
                            <tr>
                                <th className="px-6 py-4" scope="col">
                                    اليوم والتاريخ
                                </th>
                                <th className="px-6 py-4" scope="col">
                                    المقرر
                                </th>
                                <th className="px-6 py-4" scope="col">
                                    الوقت
                                </th>
                                <th className="px-6 py-4" scope="col">
                                    القاعة
                                </th>
                                <th className="px-6 py-4" scope="col">
                                    رقم المقعد
                                </th>
                                <th className="px-6 py-4 text-center" scope="col">
                                    المدة
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="font-bold text-slate-900 dark:text-white">
                                        الأحد
                                    </div>
                                    <div className="text-xs text-slate-500">2025/05/25</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-bold text-slate-900 dark:text-white">
                                        هندسة المتطلبات المتقدمة
                                    </div>
                                    <div className="text-xs text-primary dark:text-blue-400 font-mono mt-0.5">
                                        SE301
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                                        <span className="material-symbols-outlined text-slate-400 text-sm">
                                            schedule
                                        </span>
                                        09:00 ص
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-slate-400 text-sm">
                                            room
                                        </span>
                                        مبنى C - قاعة 101
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-mono font-bold text-lg text-primary dark:text-blue-400">
                                    45
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300">
                                        ساعتان
                                    </span>
                                </td>
                            </tr>
                            <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors bg-amber-50/10 dark:bg-amber-900/5">
                                <td className="px-6 py-4">
                                    <div className="font-bold text-slate-900 dark:text-white">
                                        الأربعاء
                                    </div>
                                    <div className="text-xs text-slate-500">2025/05/28</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-bold text-slate-900 dark:text-white">
                                        الذكاء الاصطناعي
                                    </div>
                                    <div className="text-xs text-primary dark:text-blue-400 font-mono mt-0.5">
                                        CS310
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                                        <span className="material-symbols-outlined text-slate-400 text-sm">
                                            schedule
                                        </span>
                                        09:00 ص
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-slate-400 text-sm">
                                            room
                                        </span>
                                        مبنى الامتحانات الرئيسي
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-mono font-bold text-lg text-primary dark:text-blue-400">
                                    102
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300">
                                        ساعتان
                                    </span>
                                </td>
                            </tr>
                            <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="font-bold text-slate-900 dark:text-white">
                                        الاثنين
                                    </div>
                                    <div className="text-xs text-slate-500">2025/06/02</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-bold text-slate-900 dark:text-white">
                                        إدارة مشاريع البرمجيات
                                    </div>
                                    <div className="text-xs text-primary dark:text-blue-400 font-mono mt-0.5">
                                        SE304
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                                        <span className="material-symbols-outlined text-slate-400 text-sm">
                                            schedule
                                        </span>
                                        11:00 ص
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-slate-400 text-sm">
                                            room
                                        </span>
                                        مبنى C - قاعة 205
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-mono font-bold text-lg text-primary dark:text-blue-400">
                                    23
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300">
                                        ساعتان
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-600 dark:text-red-400">
                            <span className="material-symbols-outlined">rule</span>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                            ضوابط الغياب
                        </h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        يعتبر الطالب غائباً عن الامتحان النهائي إذا لم يحضر في الزمان والمكان
                        المحددين. وفي حال وجود عذر قهري، يجب تقديم المستندات خلال 3 أيام من
                        تاريخ الامتحان إلى إدارة الكلية للنظر في إمكانية عقد امتحان بديل.
                    </p>
                    <a
                        className="text-primary text-sm font-bold hover:underline flex items-center gap-1"
                        href="#"
                    >
                        لقراءة اللائحة الكاملة للاختبارات
                        <span className="material-symbols-outlined text-sm rtl:rotate-180">
                            arrow_forward
                        </span>
                    </a>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
                            <span className="material-symbols-outlined">report_problem</span>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                            الإبلاغ عن تعارض
                        </h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        في حال وجود تعارض في مواعيد الاختبارات (اختبارين في نفس الوقت أو ثلاث
                        اختبارات في نفس اليوم)، يرجى رفع طلب &quot;تعارض اختبارات&quot; فوراً ليتم
                        معالجته من قبل لجنة الجداول والاختبارات.
                    </p>
                    <button
                        onClick={handleReportConflict}
                        className="text-white bg-amber-600 hover:bg-amber-700 font-bold py-2 px-4 rounded-lg text-sm transition-colors shadow-sm"
                    >
                        رفع طلب تعارض
                    </button>
                </div>
            </div>
        </>
    );
}
