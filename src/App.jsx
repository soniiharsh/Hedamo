import React, { useState, useMemo } from 'react';
import {
  Search,
  Calendar,
  FileText,
  ChevronLeft,
  AlertCircle,
} from 'lucide-react';

/* ------------------ MOCK DATA ------------------ */

const products = [
  {
    id: 1,
    name: "Organic Cotton Fabric Roll",
    category: "Textiles",
    producer: "GreenWeave Manufacturing",
    status: "Published",
    lastUpdated: "2025-01-03",
    declaredBy: "Sarah Chen, Quality Manager",
    declaredDate: "2025-01-03",
    evidenceCount: 3,
    versions: [
      { version: 2, date: "2025-01-03", status: "Published", notes: "Updated disclosure details" },
      { version: 1, date: "2024-12-15", status: "Submitted", notes: "Initial disclosure" }
    ]
  },
  {
    id: 2,
    name: "Recycled Steel Beams Grade A",
    category: "Construction Materials",
    producer: "EcoSteel Industries",
    status: "Submitted",
    lastUpdated: "2025-01-05",
    declaredBy: "Michael Torres, Operations Director",
    declaredDate: "2025-01-05",
    evidenceCount: 5,
    versions: [
      { version: 1, date: "2025-01-05", status: "Submitted", notes: "Initial disclosure" }
    ]
  },
  {
    id: 3,
    name: "Biodegradable Food Containers",
    category: "Packaging",
    producer: "NaturePack Solutions",
    status: "Published",
    lastUpdated: "2024-12-28",
    declaredBy: "Lisa Anderson, Sustainability Lead",
    declaredDate: "2024-12-20",
    evidenceCount: 2,
    versions: [
      { version: 3, date: "2024-12-28", status: "Published", notes: "Material composition update" },
      { version: 2, date: "2024-12-20", status: "Published", notes: "Added test results" },
      { version: 1, date: "2024-11-10", status: "Draft", notes: "Initial draft" }
    ]
  },
  {
    id: 4,
    name: "Solar Panel Module SP-400",
    category: "Energy Equipment",
    producer: "SunTech Manufacturing",
    status: "Published",
    lastUpdated: "2025-01-02",
    declaredBy: "David Kim, Technical Director",
    declaredDate: "2024-12-30",
    evidenceCount: 7,
    versions: [
      { version: 2, date: "2025-01-02", status: "Published", notes: "Updated performance data" },
      { version: 1, date: "2024-12-30", status: "Submitted", notes: "Initial disclosure" }
    ]
  },
  {
    id: 5,
    name: "Water Filtration System Model F-2000",
    category: "Water Treatment",
    producer: "PureFlow Technologies",
    status: "Draft",
    lastUpdated: "2025-01-06",
    declaredBy: "Emma Rodriguez, Product Manager",
    declaredDate: "2025-01-06",
    evidenceCount: 1,
    versions: [
      { version: 1, date: "2025-01-06", status: "Draft", notes: "Work in progress" }
    ]
  },
  {
    id: 6,
    name: "Low-VOC Interior Paint",
    category: "Chemicals",
    producer: "EcoCoat Industries",
    status: "Published",
    lastUpdated: "2024-12-18",
    declaredBy: "James Wilson, R&D Manager",
    declaredDate: "2024-12-15",
    evidenceCount: 4,
    versions: [
      { version: 2, date: "2024-12-18", status: "Published", notes: "Added safety data" },
      { version: 1, date: "2024-12-15", status: "Submitted", notes: "Initial disclosure" }
    ]
  }
];

const categories = [...new Set(products.map(p => p.category))];
const statuses = ["Draft", "Submitted", "Published"];

/* ------------------ PRODUCT CARD ------------------ */

const ProductCard = ({ product, onClick }) => {
  const statusColors = {
    Draft: "bg-slate-100 text-slate-600",
    Submitted: "bg-amber-50 text-amber-700",
    Published: "bg-emerald-50 text-emerald-700",
  };

  return (
    <div
      onClick={onClick}
      className="bg-white border border-slate-200 rounded-lg p-6 cursor-pointer transition-all duration-200 hover:border-slate-300 hover:shadow-md"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-slate-900 leading-tight pr-4">
          {product.name}
        </h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${statusColors[product.status]}`}>
          {product.status}
        </span>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex items-center text-slate-600">
          <span className="font-medium mr-2">Category:</span>
          <span>{product.category}</span>
        </div>
        <div className="flex items-center text-slate-600">
          <span className="font-medium mr-2">Declared by:</span>
          <span>{product.producer}</span>
        </div>
        <div className="flex items-center text-slate-500 text-xs mt-3">
          <Calendar className="w-3.5 h-3.5 mr-1.5" />
          <span>Last updated {product.lastUpdated}</span>
        </div>
      </div>
    </div>
  );
};

/* ------------------ PRODUCT DETAIL ------------------ */

const ProductDetail = ({ product, onBack }) => {
  const statusColors = {
    Draft: "bg-slate-100 text-slate-600 border-slate-200",
    Submitted: "bg-amber-50 text-amber-700 border-amber-200",
    Published: "bg-emerald-50 text-emerald-700 border-emerald-200"
  };

  return (
    <div className="animate-fadeIn">
      <button
        onClick={onBack}
        className="flex items-center text-slate-600 hover:text-slate-900 mb-6 transition-colors duration-200"
      >
        <ChevronLeft className="w-5 h-5 mr-1" />
        <span className="font-medium">Back to Products</span>
      </button>

      <div className="bg-white border border-slate-200 rounded-lg p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              {product.name}
            </h2>
            <p className="text-slate-600">{product.category}</p>
          </div>
          <span className={`px-4 py-2 rounded-lg text-sm font-medium border ${statusColors[product.status]}`}>
            {product.status}
          </span>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-blue-900">
              <strong>Disclosure Notice:</strong> This page presents producer-declared information. HEDAMO does not verify, certify, or validate the accuracy of this information. All content is the responsibility of the declaring producer.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">
              Disclosure Summary
            </h3>
            <div className="space-y-3">
              <div>
                <span className="text-sm text-slate-500 block mb-1">Declared by</span>
                <span className="text-slate-900 font-medium">{product.declaredBy}</span>
                <span className="text-slate-600 block text-sm">{product.producer}</span>
              </div>
              <div>
                <span className="text-sm text-slate-500 block mb-1">Declaration date</span>
                <span className="text-slate-900">{product.declaredDate}</span>
              </div>
              <div>
                <span className="text-sm text-slate-500 block mb-1">Supporting evidence</span>
                <span className="text-slate-900">
                  {product.evidenceCount > 0 
                    ? `${product.evidenceCount} document${product.evidenceCount !== 1 ? 's' : ''} attached by producer`
                    : 'No evidence attached'}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">
              Version History
            </h3>
            <div className="space-y-3">
              {product.versions.map((version, idx) => (
                <div key={idx} className="border-l-2 border-slate-200 pl-4 pb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-slate-900">
                      Version {version.version}
                    </span>
                    <span className="text-xs text-slate-500">{version.date}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${statusColors[version.status]}`}>
                      {version.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{version.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6">
          <p className="text-xs text-slate-500 leading-relaxed">
            Information on this page was provided directly by {product.producer}. HEDAMO serves as a disclosure platform and does not independently verify, approve, or endorse the claims made by producers. Users are responsible for conducting their own due diligence regarding the accuracy and completeness of disclosed information.
          </p>
        </div>
      </div>
    </div>
  );
};

/* ------------------ MAIN APP ------------------ */

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortBy, setSortBy] = useState('date-desc');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.producer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesStatus = selectedStatus === 'all' || product.status === selectedStatus;
      return matchesSearch && matchesCategory && matchesStatus;
    });

    return filtered.sort((a, b) => {
      if (sortBy === 'date-desc') return new Date(b.lastUpdated) - new Date(a.lastUpdated);
      if (sortBy === 'date-asc') return new Date(a.lastUpdated) - new Date(b.lastUpdated);
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      return 0;
    });
  }, [searchTerm, selectedCategory, selectedStatus, sortBy]);

  const handleProductClick = (product) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedProduct(product);
      setIsLoading(false);
    }, 150);
  };

  const activeFilterCount = [
    selectedCategory !== 'all',
    selectedStatus !== 'all',
    searchTerm !== ''
  ].filter(Boolean).length;

  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-slate-50 p-8">
        <div className="max-w-5xl mx-auto">
          <ProductDetail 
            product={selectedProduct} 
            onBack={() => setSelectedProduct(null)} 
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">
            Product Disclosures
          </h1>
          <p className="text-slate-600">
            Browse producer-declared product information and supporting documentation
          </p>
        </header>

        <div className="bg-white border border-slate-200 rounded-lg p-6 mb-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Search products
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name or producer..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200 bg-white"
              >
                <option value="all">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200 bg-white"
              >
                <option value="all">All Statuses</option>
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-600">
                {filteredAndSortedProducts.length} product{filteredAndSortedProducts.length !== 1 ? 's' : ''}
                {activeFilterCount > 0 && ` (${activeFilterCount} filter${activeFilterCount !== 1 ? 's' : ''} active)`}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-slate-600">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200 bg-white"
              >
                <option value="date-desc">Newest First</option>
                <option value="date-asc">Oldest First</option>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
              </select>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white border border-slate-200 rounded-lg p-6 animate-pulse">
                <div className="h-6 bg-slate-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-slate-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-slate-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : filteredAndSortedProducts.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-lg p-12 text-center">
            <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">
              No products found
            </h3>
            <p className="text-slate-600 mb-4">
              No products match your current search and filter criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedStatus('all');
              }}
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}