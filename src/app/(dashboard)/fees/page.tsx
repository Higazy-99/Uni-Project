"use client";

import React, { useState } from 'react';
import { toast } from 'sonner';

export default function FeesPage() {
    const [isPaid, setIsPaid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handlePayment = () => {
        setIsLoading(true);
        // Simulate payment processing
        setTimeout(() => {
            setIsPaid(true);
            setIsLoading(false);
            toast.success('تمت عملية الدفع بنجاح!', {
                description: 'تم سداد الرسوم الدراسية للفصل الحالي.',
                duration: 5000,
            });
        }, 1500);
    };

    return (
        <>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
                        <span>الرئيسية</span>
                        <span className="material-symbols-outlined text-xs rtl:rotate-180">
                            chevron_right
                        </span>
                        <span className="text-primary font-medium">الرسوم الدراسية</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        الرسوم والمدفوعات
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">
                        متابعة الحالة المالية وسداد الرسوم الدراسية.
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 font-bold py-2 px-4 rounded-xl shadow-sm transition-all flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">history</span>
                        <span className="hidden sm:inline">سجل العمليات</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-card border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                            <span className="material-symbols-outlined">account_balance_wallet</span>
                        </div>
                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${isPaid ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400' : 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400'}`}>
                            {isPaid ? 'مدفوع بالكامل' : 'مدفوع جزئياً'}
                        </span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        إجمالي الرسوم المستحقة
                    </p>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                        15,000 ج.م
                    </h3>
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-sm">
                        <span className="text-slate-500">المدفوع</span>
                        <span className="font-bold text-green-600">
                            {isPaid ? '15,000 ج.م' : '5,000 ج.م'}
                        </span>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-card border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
                            <span className="material-symbols-outlined">payments</span>
                        </div>
                        {!isPaid && (
                            <span className="px-3 py-1 bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400 text-xs font-bold rounded-full animate-pulse">
                                مستحق الدفع
                            </span>
                        )}
                        {isPaid && (
                            <span className="px-3 py-1 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 text-xs font-bold rounded-full">
                                تم السداد
                            </span>
                        )}
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        المبلغ المتبقي
                    </p>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                        {isPaid ? '0 ج.م' : '10,000 ج.م'}
                    </h3>
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-sm">
                        <span className="text-slate-500">تاريخ الاستحقاق</span>
                        <span className={`font-bold ${isPaid ? 'text-green-600' : 'text-amber-600'}`}>
                            {isPaid ? 'تم' : '2025/06/01'}
                        </span>
                    </div>
                </div>

                <div className={`p-6 rounded-2xl shadow-lg text-white flex flex-col justify-between relative overflow-hidden group transition-all duration-500 ${isPaid ? 'bg-green-600' : 'bg-gradient-to-br from-primary to-primary-light'}`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-all duration-500"></div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">{isPaid ? 'تم سداد الرسوم' : 'سداد الرسوم'}</h3>
                        <p className="text-blue-100 text-sm">
                            {isPaid ? 'شكراً لك! تم سداد جميع الرسوم المستحقة للفصل الحالي.' : 'يمكنك سداد الرسوم الدراسية المتبقية بسهولة وأمان.'}
                        </p>
                    </div>
                    {!isPaid && (
                        <button
                            onClick={handlePayment}
                            disabled={isLoading}
                            className="mt-6 w-full bg-white text-primary font-bold py-3 rounded-xl shadow hover:bg-blue-50 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <span className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
                            ) : (
                                <>
                                    <span className="material-symbols-outlined">credit_card</span>
                                    دفع الآن
                                </>
                            )}
                        </button>
                    )}
                    {isPaid && (
                        <div className="mt-6 w-full bg-white/20 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">check_circle</span>
                            تم الدفع بنجاح
                        </div>
                    )}
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
                            <span className="material-symbols-outlined">receipt_long</span>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                            تفاصيل الفاتورة
                        </h3>
                    </div>
                    <button className="text-sm text-slate-500 hover:text-primary flex items-center gap-1 transition-colors">
                        <span className="material-symbols-outlined text-lg">download</span>
                        <span>تنزيل الفاتورة</span>
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-right text-slate-600 dark:text-slate-400">
                        <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-xs uppercase font-bold tracking-wider">
                            <tr>
                                <th className="px-6 py-4" scope="col">
                                    البند
                                </th>
                                <th className="px-6 py-4" scope="col">
                                    الوصف
                                </th>
                                <th className="px-6 py-4 text-center" scope="col">
                                    المبلغ
                                </th>
                                <th className="px-6 py-4 text-center" scope="col">
                                    الحالة
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">
                                    رسوم دراسية
                                </td>
                                <td className="px-6 py-4">
                                    الفصل الدراسي الثاني 2024-2025 (15 ساعة)
                                </td>
                                <td className="px-6 py-4 text-center font-bold font-mono">
                                    14,500
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${isPaid ? 'bg-green-50 text-green-700 border-green-100' : 'bg-amber-50 text-amber-700 border-amber-100'}`}>
                                        {isPaid ? 'مدفوع' : 'مستحق'}
                                    </span>
                                </td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">
                                    رسوم خدمات
                                </td>
                                <td className="px-6 py-4">رسوم الخدمات الطلابية والأنشطة</td>
                                <td className="px-6 py-4 text-center font-bold font-mono">
                                    500
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-100 dark:border-green-800">
                                        مدفوع
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot className="bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800">
                            <tr>
                                <td
                                    className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300"
                                    colSpan={2}
                                >
                                    الإجمالي
                                </td>
                                <td className="px-6 py-4 text-center font-bold text-slate-900 dark:text-white text-lg font-mono">
                                    15,000
                                </td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    );
}
