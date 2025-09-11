type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
export declare interface KtList<E> /* extends Collection<E> */ {
    asJsReadonlyArrayView(): ReadonlyArray<E>;
    readonly __doNotUseOrImplementIt: {
        readonly "kotlin.collections.KtList": unique symbol;
    };
}
export declare abstract class KtList<E> extends KtSingleton<KtList.$metadata$.constructor>() {
    private constructor();
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace KtList.$metadata$ {
    abstract class constructor {
        fromJsArray<E>(array: ReadonlyArray<E>): KtList<E>;
        private constructor();
    }
}
export declare interface KtMutableList<E> extends KtList<E>/*, MutableCollection<E> */ {
    asJsArrayView(): Array<E>;
    readonly __doNotUseOrImplementIt: {
        readonly "kotlin.collections.KtMutableList": unique symbol;
    } & KtList<E>["__doNotUseOrImplementIt"];
}
export declare abstract class KtMutableList<E> extends KtSingleton<KtMutableList.$metadata$.constructor>() {
    private constructor();
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace KtMutableList.$metadata$ {
    abstract class constructor {
        fromJsArray<E>(array: ReadonlyArray<E>): KtMutableList<E>;
        private constructor();
    }
}
export declare interface KtSet<E> /* extends Collection<E> */ {
    asJsReadonlySetView(): ReadonlySet<E>;
    readonly __doNotUseOrImplementIt: {
        readonly "kotlin.collections.KtSet": unique symbol;
    };
}
export declare abstract class KtSet<E> extends KtSingleton<KtSet.$metadata$.constructor>() {
    private constructor();
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace KtSet.$metadata$ {
    abstract class constructor {
        fromJsSet<E>(set: ReadonlySet<E>): KtSet<E>;
        private constructor();
    }
}
export declare interface KtMap<K, V> {
    asJsReadonlyMapView(): ReadonlyMap<K, V>;
    readonly __doNotUseOrImplementIt: {
        readonly "kotlin.collections.KtMap": unique symbol;
    };
}
export declare abstract class KtMap<K, V> extends KtSingleton<KtMap.$metadata$.constructor>() {
    private constructor();
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace KtMap.$metadata$ {
    abstract class constructor {
        fromJsMap<K, V>(map: ReadonlyMap<K, V>): KtMap<K, V>;
        private constructor();
    }
}
export declare interface KtMutableSet<E> extends KtSet<E>/*, MutableCollection<E> */ {
    asJsSetView(): Set<E>;
    readonly __doNotUseOrImplementIt: {
        readonly "kotlin.collections.KtMutableSet": unique symbol;
    } & KtSet<E>["__doNotUseOrImplementIt"];
}
export declare abstract class KtMutableSet<E> extends KtSingleton<KtMutableSet.$metadata$.constructor>() {
    private constructor();
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace KtMutableSet.$metadata$ {
    abstract class constructor {
        fromJsSet<E>(set: ReadonlySet<E>): KtMutableSet<E>;
        private constructor();
    }
}
export declare interface KtMutableMap<K, V> extends KtMap<K, V> {
    asJsMapView(): Map<K, V>;
    readonly __doNotUseOrImplementIt: {
        readonly "kotlin.collections.KtMutableMap": unique symbol;
    } & KtMap<K, V>["__doNotUseOrImplementIt"];
}
export declare abstract class KtMutableMap<K, V> extends KtSingleton<KtMutableMap.$metadata$.constructor>() {
    private constructor();
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace KtMutableMap.$metadata$ {
    abstract class constructor {
        fromJsMap<K, V>(map: ReadonlyMap<K, V>): KtMutableMap<K, V>;
        private constructor();
    }
}
export declare interface ModelInfoProvider {
    load(modelIdentifier: any/* ModelIdentifier */): Nullable<any>/* Nullable<ModelInfo> */;
    readonly __doNotUseOrImplementIt: {
        readonly "org.hl7.cql.model.ModelInfoProvider": unique symbol;
    };
}
export declare class NamespaceManager {
    constructor();
    hasNamespaces(): boolean;
    ensureNamespaceRegistered(namespaceInfo: any/* NamespaceInfo */): void;
    addNamespace(namespaceInfo: any/* NamespaceInfo */): void;
    resolveNamespaceUri(namespaceName: string): Nullable<string>;
    getNamespaceInfoFromUri(namespaceUri: string): Nullable<any>/* Nullable<NamespaceInfo> */;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace NamespaceManager.$metadata$ {
    const constructor: abstract new () => NamespaceManager;
}
export declare namespace NamespaceManager {
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Companion.$metadata$ {
        abstract class constructor {
            getPath(namespaceUri: Nullable<string>, name: string): string;
            getUriPart(namespaceQualifiedName: Nullable<string>): Nullable<string>;
            getNamePart(namespaceQualifiedName: Nullable<string>): Nullable<string>;
            private constructor();
        }
    }
}
export declare class CqlCompilerException /* extends RuntimeException */ {
    constructor(message: Nullable<string>, severity?: CqlCompilerException.ErrorSeverity, locator?: Nullable<any>/* Nullable<TrackBack> */, cause?: Nullable<Error>);
    get severity(): CqlCompilerException.ErrorSeverity;
    get locator(): Nullable<any>/* Nullable<TrackBack> */;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace CqlCompilerException.$metadata$ {
    const constructor: abstract new () => CqlCompilerException;
}
export declare namespace CqlCompilerException {
    abstract class ErrorSeverity {
        private constructor();
        static get Info(): CqlCompilerException.ErrorSeverity & {
            get name(): "Info";
            get ordinal(): 0;
        };
        static get Warning(): CqlCompilerException.ErrorSeverity & {
            get name(): "Warning";
            get ordinal(): 1;
        };
        static get Error(): CqlCompilerException.ErrorSeverity & {
            get name(): "Error";
            get ordinal(): 2;
        };
        get name(): "Info" | "Warning" | "Error";
        get ordinal(): 0 | 1 | 2;
        static values(): Array<CqlCompilerException.ErrorSeverity>;
        static valueOf(value: string): CqlCompilerException.ErrorSeverity;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ErrorSeverity.$metadata$ {
        const constructor: abstract new () => ErrorSeverity;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Companion.$metadata$ {
        abstract class constructor {
            hasErrors(exceptions: KtList<CqlCompilerException>): boolean;
            private constructor();
        }
    }
}
export declare class CqlCompilerOptions {
    constructor();
    get options(): KtMutableSet<CqlCompilerOptions.Options>;
    get validateUnits(): boolean;
    set validateUnits(value: boolean);
    get verifyOnly(): boolean;
    set verifyOnly(value: boolean);
    get enableCqlOnly(): boolean;
    set enableCqlOnly(value: boolean);
    get compatibilityLevel(): string;
    set compatibilityLevel(value: string);
    get errorLevel(): Nullable<CqlCompilerException.ErrorSeverity>;
    set errorLevel(value: Nullable<CqlCompilerException.ErrorSeverity>);
    get signatureLevel(): LibraryBuilder.SignatureLevel;
    set signatureLevel(value: LibraryBuilder.SignatureLevel);
    get analyzeDataRequirements(): boolean;
    set analyzeDataRequirements(value: boolean);
    get collapseDataRequirements(): boolean;
    set collapseDataRequirements(value: boolean);
    setOptions(options: Array<CqlCompilerOptions.Options>): void;
    withOptions(options: Array<CqlCompilerOptions.Options>): CqlCompilerOptions;
    withCompatibilityLevel(compatibilityLevel: string): CqlCompilerOptions;
    withVerifyOnly(verifyOnly: boolean): CqlCompilerOptions;
    withValidateUnits(validateUnits: boolean): CqlCompilerOptions;
    withErrorLevel(errorLevel: Nullable<CqlCompilerException.ErrorSeverity>): CqlCompilerOptions;
    withSignatureLevel(signatureLevel: LibraryBuilder.SignatureLevel): CqlCompilerOptions;
    withCollapseDataRequirements(collapseDataRequirements: boolean): CqlCompilerOptions;
    withAnalyzeDataRequirements(analyzeDataRequirements: boolean): CqlCompilerOptions;
    toString(): string;
    static defaultOptions(): CqlCompilerOptions;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace CqlCompilerOptions.$metadata$ {
    const constructor: abstract new () => CqlCompilerOptions;
}
export declare namespace CqlCompilerOptions {
    abstract class Options {
        private constructor();
        static get EnableDateRangeOptimization(): CqlCompilerOptions.Options & {
            get name(): "EnableDateRangeOptimization";
            get ordinal(): 0;
        };
        static get EnableAnnotations(): CqlCompilerOptions.Options & {
            get name(): "EnableAnnotations";
            get ordinal(): 1;
        };
        static get EnableLocators(): CqlCompilerOptions.Options & {
            get name(): "EnableLocators";
            get ordinal(): 2;
        };
        static get EnableResultTypes(): CqlCompilerOptions.Options & {
            get name(): "EnableResultTypes";
            get ordinal(): 3;
        };
        static get EnableDetailedErrors(): CqlCompilerOptions.Options & {
            get name(): "EnableDetailedErrors";
            get ordinal(): 4;
        };
        static get DisableListTraversal(): CqlCompilerOptions.Options & {
            get name(): "DisableListTraversal";
            get ordinal(): 5;
        };
        static get DisableListDemotion(): CqlCompilerOptions.Options & {
            get name(): "DisableListDemotion";
            get ordinal(): 6;
        };
        static get DisableListPromotion(): CqlCompilerOptions.Options & {
            get name(): "DisableListPromotion";
            get ordinal(): 7;
        };
        static get EnableIntervalDemotion(): CqlCompilerOptions.Options & {
            get name(): "EnableIntervalDemotion";
            get ordinal(): 8;
        };
        static get EnableIntervalPromotion(): CqlCompilerOptions.Options & {
            get name(): "EnableIntervalPromotion";
            get ordinal(): 9;
        };
        static get DisableMethodInvocation(): CqlCompilerOptions.Options & {
            get name(): "DisableMethodInvocation";
            get ordinal(): 10;
        };
        static get RequireFromKeyword(): CqlCompilerOptions.Options & {
            get name(): "RequireFromKeyword";
            get ordinal(): 11;
        };
        static get DisableDefaultModelInfoLoad(): CqlCompilerOptions.Options & {
            get name(): "DisableDefaultModelInfoLoad";
            get ordinal(): 12;
        };
        get name(): "EnableDateRangeOptimization" | "EnableAnnotations" | "EnableLocators" | "EnableResultTypes" | "EnableDetailedErrors" | "DisableListTraversal" | "DisableListDemotion" | "DisableListPromotion" | "EnableIntervalDemotion" | "EnableIntervalPromotion" | "DisableMethodInvocation" | "RequireFromKeyword" | "DisableDefaultModelInfoLoad";
        get ordinal(): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
        static values(): Array<CqlCompilerOptions.Options>;
        static valueOf(value: string): CqlCompilerOptions.Options;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Options.$metadata$ {
        const constructor: abstract new () => Options;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Companion.$metadata$ {
        abstract class constructor {
            private constructor();
        }
    }
}
export declare class CqlTranslator {
    private constructor();
    toXml(elmLibraryWriterProvider?: any/* ElmLibraryWriterProvider */): string;
    toJson(elmLibraryWriterProvider?: any/* ElmLibraryWriterProvider */): string;
    toELM(): Nullable<any>/* Nullable<Library> */;
    get translatedLibrary(): Nullable<any>/* Nullable<CompiledLibrary> */;
    toObject(): Nullable<any>;
    toRetrieves(): Nullable<KtList<Nullable<any>/* Nullable<Retrieve> */>>;
    get libraries(): KtMap<any/* VersionedIdentifier */, Nullable<any>/* Nullable<Library> */>;
    get exceptions(): Nullable<KtList<Nullable<CqlCompilerException>>>;
    get errors(): Nullable<KtList<Nullable<CqlCompilerException>>>;
    get warnings(): Nullable<KtList<Nullable<CqlCompilerException>>>;
    get messages(): Nullable<KtList<Nullable<CqlCompilerException>>>;
    static fromText(cqlText: string, libraryManager: LibraryManager): CqlTranslator;
    static fromSource(namespaceInfo: Nullable<any>/* Nullable<NamespaceInfo> */, sourceInfo: Nullable<any>/* Nullable<VersionedIdentifier> */, source: any/* Source */, libraryManager: LibraryManager): CqlTranslator;
    static fromFile(namespaceInfo: Nullable<any>/* Nullable<NamespaceInfo> */, sourceInfo: Nullable<any>/* Nullable<VersionedIdentifier> */, cqlFile: any/* Path */, libraryManager: LibraryManager): CqlTranslator;
    static convertToXml(library: any/* Library */, elmLibraryWriterProvider?: any/* ElmLibraryWriterProvider */): string;
    static convertToJson(library: any/* Library */, elmLibraryWriterProvider?: any/* ElmLibraryWriterProvider */): string;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace CqlTranslator.$metadata$ {
    const constructor: abstract new () => CqlTranslator;
}
export declare namespace CqlTranslator {
    abstract class Format {
        private constructor();
        static get XML(): CqlTranslator.Format & {
            get name(): "XML";
            get ordinal(): 0;
        };
        static get JSON(): CqlTranslator.Format & {
            get name(): "JSON";
            get ordinal(): 1;
        };
        static get COFFEE(): CqlTranslator.Format & {
            get name(): "COFFEE";
            get ordinal(): 2;
        };
        get name(): "XML" | "JSON" | "COFFEE";
        get ordinal(): 0 | 1 | 2;
        static values(): Array<CqlTranslator.Format>;
        static valueOf(value: string): CqlTranslator.Format;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Format.$metadata$ {
        const constructor: abstract new () => Format;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Companion.$metadata$ {
        abstract class constructor {
            convertToXml$default(library: any/* Library */, elmLibraryWriterProvider?: any/* ElmLibraryWriterProvider */): string;
            convertToJson$default(library: any/* Library */, elmLibraryWriterProvider?: any/* ElmLibraryWriterProvider */): string;
            private constructor();
        }
    }
}
export declare class CqlTranslatorOptions {
    constructor();
    get cqlCompilerOptions(): Nullable<CqlCompilerOptions>;
    set cqlCompilerOptions(value: Nullable<CqlCompilerOptions>);
    get formats(): Nullable<KtSet<CqlTranslatorOptions.Format>>;
    set formats(value: Nullable<KtSet<CqlTranslatorOptions.Format>>);
    withCqlCompilerOptions(cqlCompilerOptions: Nullable<CqlCompilerOptions>): CqlTranslatorOptions;
    withFormats(formats: Nullable<KtSet<CqlTranslatorOptions.Format>>): CqlTranslatorOptions;
    toSink(sink: any/* Sink */): void;
    toFile(path: any/* Path */): void;
    static defaultOptions(): CqlTranslatorOptions;
    static fromFile(path: any/* Path */): CqlTranslatorOptions;
    static fromSource(source: any/* Source */): CqlTranslatorOptions;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace CqlTranslatorOptions.$metadata$ {
    const constructor: abstract new () => CqlTranslatorOptions;
}
export declare namespace CqlTranslatorOptions {
    abstract class Format {
        private constructor();
        static get XML(): CqlTranslatorOptions.Format & {
            get name(): "XML";
            get ordinal(): 0;
        };
        static get JSON(): CqlTranslatorOptions.Format & {
            get name(): "JSON";
            get ordinal(): 1;
        };
        static get COFFEE(): CqlTranslatorOptions.Format & {
            get name(): "COFFEE";
            get ordinal(): 2;
        };
        get name(): "XML" | "JSON" | "COFFEE";
        get ordinal(): 0 | 1 | 2;
        static values(): Array<CqlTranslatorOptions.Format>;
        static valueOf(value: string): CqlTranslatorOptions.Format;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Format.$metadata$ {
        const constructor: abstract new () => Format;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Companion.$metadata$ {
        abstract class constructor {
            private constructor();
        }
    }
}
export declare class LibraryBuilder {
    constructor(namespaceInfo: Nullable<any>/* Nullable<NamespaceInfo> */, libraryManager: LibraryManager, objectFactory: any/* IdObjectFactory */);
    get namespaceInfo(): Nullable<any>/* Nullable<NamespaceInfo> */;
    get libraryManager(): LibraryManager;
    get objectFactory(): any/* IdObjectFactory */;
    get errors(): KtMutableList<CqlCompilerException>;
    get warnings(): KtMutableList<CqlCompilerException>;
    get messages(): KtMutableList<CqlCompilerException>;
    get exceptions(): KtMutableList<CqlCompilerException>;
    get defaultModel(): Nullable<any>/* Nullable<Model> */;
    set defaultModel(value: Nullable<any>/* Nullable<Model> */);
    get library(): any/* Library */;
    set library(value: any/* Library */);
    get compiledLibrary(): any/* CompiledLibrary */;
    set compiledLibrary(value: any/* CompiledLibrary */);
    get conversionMap(): any/* ConversionMap */;
    enableListTraversal(): void;
    get compatibilityLevel(): Nullable<string>;
    set compatibilityLevel(value: Nullable<string>);
    get isCompatibilityLevel3(): boolean;
    get isCompatibilityLevel4(): boolean;
    isCompatibleWith(sinceCompatibilityLevel: Nullable<string>): boolean;
    checkCompatibilityLevel(featureName: Nullable<string>, sinceCompatibilityLevel: Nullable<string>): void;
    isWellKnownModelName(unqualifiedIdentifier: Nullable<string>): boolean;
    isWellKnownLibraryName(unqualifiedIdentifier: Nullable<string>): boolean;
    getNamedTypeSpecifierResult(namedTypeSpecifierIdentifier: string): Nullable<any>/* Nullable<ResultWithPossibleError<Nullable<NamedTypeSpecifier>>> */;
    addNamedTypeSpecifierResult(namedTypeSpecifierIdentifier: string, namedTypeSpecifierResult: any/* ResultWithPossibleError<Nullable<NamedTypeSpecifier>> */): void;
    hasUsings(): boolean;
    resolveContextName(modelName: Nullable<string>, contextName: string): Nullable<any>/* Nullable<ModelContext> */;
    resolveTypeSpecifier(typeSpecifier: Nullable<string>): Nullable<any>/* Nullable<DataType> */;
    resolveUsingRef(modelName: string): Nullable<any>/* Nullable<UsingDef> */;
    get systemModel(): any/* SystemModel */;
    resolveLibrary(identifier: Nullable<string>): any/* CompiledLibrary */;
    resolveNamespaceUri(namespaceName: string, mustResolve: boolean): Nullable<string>;
    recordParsingException(e: CqlCompilerException): void;
    beginTranslation(): void;
    get libraryIdentifier(): Nullable<any>/* Nullable<VersionedIdentifier> */;
    set libraryIdentifier(value: Nullable<any>/* Nullable<VersionedIdentifier> */);
    endTranslation(): void;
    canResolveLibrary(includeDef: any/* IncludeDef */): boolean;
    addInclude(includeDef: any/* IncludeDef */): void;
    addParameter(paramDef: any/* ParameterDef */): void;
    addCodeSystem(cs: any/* CodeSystemDef */): void;
    addValueSet(vs: any/* ValueSetDef */): void;
    addCode(cd: any/* CodeDef */): void;
    addConcept(cd: any/* ConceptDef */): void;
    addContext(cd: any/* ContextDef */): void;
    addExpression(expDef: any/* ExpressionDef */): void;
    removeExpression(expDef: any/* ExpressionDef */): void;
    resolve(identifier: string): any/* ResolvedIdentifierContext */;
    resolveIncludeRef(identifier: string): Nullable<any>/* Nullable<IncludeDef> */;
    resolveCodeSystemRef(identifier: string): Nullable<any>/* Nullable<CodeSystemDef> */;
    resolveValueSetRef(identifier: string): Nullable<any>/* Nullable<ValueSetDef> */;
    resolveCodeRef(identifier: string): Nullable<any>/* Nullable<CodeDef> */;
    resolveConceptRef(identifier: string): Nullable<any>/* Nullable<ConceptDef> */;
    resolveParameterRef(identifier: string): Nullable<any>/* Nullable<ParameterDef> */;
    resolveExpressionRef(identifier: string): Nullable<any>/* Nullable<ExpressionDef> */;
    findConversion(fromType: any/* DataType */, toType: any/* DataType */, implicit: boolean, allowPromotionAndDemotion: boolean): Nullable<any>/* Nullable<Conversion> */;
    resolveUnaryCall(libraryName: Nullable<string>, operatorName: string, expression: any/* UnaryExpression */): Nullable<any>/* Nullable<Expression> */;
    resolveBinaryInvocation(libraryName: Nullable<string>, operatorName: string, expression: any/* BinaryExpression */, mustResolve?: boolean, allowPromotionAndDemotion?: boolean): Nullable<any>/* Nullable<Invocation> */;
    resolveTernaryCall(libraryName: Nullable<string>, operatorName: string, expression: any/* TernaryExpression */): Nullable<any>/* Nullable<Expression> */;
    resolveNaryCall(libraryName: Nullable<string>, operatorName: string, expression: Nullable<any>/* Nullable<NaryExpression> */): Nullable<any>/* Nullable<Expression> */;
    resolveAggregateCall(libraryName: Nullable<string>, operatorName: string, expression: any/* AggregateExpression */): Nullable<any>/* Nullable<Expression> */;
    resolveUnion(left: any/* Expression */, right: any/* Expression */): any/* Expression */;
    resolveIntersect(left: any/* Expression */, right: any/* Expression */): any/* Expression */;
    resolveExcept(left: any/* Expression */, right: any/* Expression */): any/* Expression */;
    resolveProperIn(left: any/* Expression */, right: any/* Expression */, dateTimePrecision: Nullable<any>/* Nullable<DateTimePrecision> */): Nullable<any>/* Nullable<Expression> */;
    resolveProperContains(left: any/* Expression */, right: any/* Expression */, dateTimePrecision: Nullable<any>/* Nullable<DateTimePrecision> */): Nullable<any>/* Nullable<Expression> */;
    resolveIncludes(left: any/* Expression */, right: any/* Expression */, dateTimePrecision: Nullable<any>/* Nullable<DateTimePrecision> */): Nullable<any>/* Nullable<Expression> */;
    resolveProperIncludes(left: any/* Expression */, right: any/* Expression */, dateTimePrecision: Nullable<any>/* Nullable<DateTimePrecision> */): Nullable<any>/* Nullable<Expression> */;
    resolveIncludedIn(left: any/* Expression */, right: any/* Expression */, dateTimePrecision: Nullable<any>/* Nullable<DateTimePrecision> */): Nullable<any>/* Nullable<Expression> */;
    resolveProperIncludedIn(left: any/* Expression */, right: any/* Expression */, dateTimePrecision: Nullable<any>/* Nullable<DateTimePrecision> */): Nullable<any>/* Nullable<Expression> */;
    resolveCall(libraryName: Nullable<string>, operatorName: string, invocation: any/* Invocation */): Nullable<any>/* Nullable<Expression> */;
    resolveInvocation$default(libraryName: Nullable<string>, operatorName: string, invocation: any/* Invocation */, mustResolve?: boolean, allowPromotionAndDemotion?: boolean, allowFluent?: boolean): Nullable<any>/* Nullable<Invocation> */;
    resolveFunctionDefinition(fd: any/* FunctionDef */): Nullable<any>/* Nullable<Operator> */;
    checkAccessLevel(libraryName: Nullable<string>, objectName: Nullable<string>, accessModifier: any/* AccessModifier */): void;
    verifyComparable(dataType: any/* DataType */): void;
    convertExpression$default(expression: any/* Expression */, targetType: any/* DataType */, implicit?: boolean): any/* Expression */;
    resolveToList(expression: Nullable<any>/* Nullable<Expression> */): any/* Expression */;
    buildAs(expression: Nullable<any>/* Nullable<Expression> */, asType: Nullable<any>/* Nullable<DataType> */): any/* As */;
    buildIs(expression: Nullable<any>/* Nullable<Expression> */, isType: Nullable<any>/* Nullable<DataType> */): any/* Is */;
    buildNull(nullType: Nullable<any>/* Nullable<DataType> */): any/* Null */;
    buildMinimum(dataType: Nullable<any>/* Nullable<DataType> */): any/* MinValue */;
    buildMaximum(dataType: Nullable<any>/* Nullable<DataType> */): any/* MaxValue */;
    buildPredecessor(source: Nullable<any>/* Nullable<Expression> */): any/* Expression */;
    buildSuccessor(source: Nullable<any>/* Nullable<Expression> */): any/* Expression */;
    verifyType(actualType: any/* DataType */, expectedType: any/* DataType */): void;
    findCompatibleType(first: Nullable<any>/* Nullable<DataType> */, second: Nullable<any>/* Nullable<DataType> */): Nullable<any>/* Nullable<DataType> */;
    ensureCompatibleTypes(first: Nullable<any>/* Nullable<DataType> */, second: any/* DataType */): Nullable<any>/* Nullable<DataType> */;
    ensureCompatible(expression: Nullable<any>/* Nullable<Expression> */, targetType: Nullable<any>/* Nullable<DataType> */): any/* Expression */;
    enforceCompatible(expression: Nullable<any>/* Nullable<Expression> */, targetType: Nullable<any>/* Nullable<DataType> */): any/* Expression */;
    createNumberLiteral(value: string): any/* Literal */;
    createLongNumberLiteral(value: Nullable<string>): any/* Literal */;
    ensureUcumUnit(unit: string): string;
    createQuantity(value: Nullable<any>/* Nullable<BigDecimalJs> */, unit: string): any/* Quantity */;
    createRatio(numerator: Nullable<any>/* Nullable<Quantity> */, denominator: Nullable<any>/* Nullable<Quantity> */): any/* Ratio */;
    createInterval(low: Nullable<any>/* Nullable<Expression> */, lowClosed: boolean, high: Nullable<any>/* Nullable<Expression> */, highClosed: boolean): any/* Interval */;
    dataTypeToQName(type: Nullable<any>/* Nullable<DataType> */): any/* QNameJs */;
    dataTypeToTypeSpecifier(type: Nullable<any>/* Nullable<DataType> */): any/* TypeSpecifier */;
    resolvePath(sourceType: Nullable<any>/* Nullable<DataType> */, path: string): Nullable<any>/* Nullable<DataType> */;
    resolveProperty(sourceType: Nullable<any>/* Nullable<DataType> */, identifier: string, mustResolve?: boolean): Nullable<any>/* Nullable<PropertyResolution> */;
    resolveIdentifier(identifier: string, mustResolve: boolean): Nullable<any>/* Nullable<Expression> */;
    resolveImplicitContext(): Nullable<any>/* Nullable<ParameterRef> */;
    applyTargetMap(source: Nullable<any>/* Nullable<Expression> */, targetMap: Nullable<string>): Nullable<any>/* Nullable<Expression> */;
    resolveAccessor(left: any/* Expression */, memberIdentifier: string): Nullable<any>/* Nullable<Expression> */;
    pushIdentifier(identifierRef: any/* IdentifierRef */, element: Nullable<any>/* Nullable<Element> */, scope?: LibraryBuilder.IdentifierScope): void;
    popIdentifier(scope?: LibraryBuilder.IdentifierScope): void;
    pushIdentifierScope(): void;
    popIdentifierScope(): void;
    determineRootCause(): Nullable<any>/* Nullable<Exception> */;
    setRootCause(rootCause: Nullable<any>/* Nullable<Exception> */): void;
    pushExpressionDefinition(identifier: string): void;
    popExpressionDefinition(): void;
    pushExpressionContext(context: Nullable<string>): void;
    popExpressionContext(): void;
    pushQueryContext(context: any/* QueryContext */): void;
    popQueryContext(): any/* QueryContext */;
    peekQueryContext(): any/* QueryContext */;
    pushExpressionTarget(target: any/* Expression */): void;
    popExpressionTarget(): any/* Expression */;
    hasExpressionTarget(): boolean;
    beginFunctionDef(functionDef: any/* FunctionDef */): void;
    endFunctionDef(): void;
    pushLiteralContext(): void;
    popLiteralContext(): void;
    checkLiteralContext(): void;
    pushTypeSpecifierContext(): void;
    popTypeSpecifierContext(): void;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace LibraryBuilder.$metadata$ {
    const constructor: abstract new () => LibraryBuilder;
}
export declare namespace LibraryBuilder {
    abstract class SignatureLevel {
        private constructor();
        static get None(): LibraryBuilder.SignatureLevel & {
            get name(): "None";
            get ordinal(): 0;
        };
        static get Differing(): LibraryBuilder.SignatureLevel & {
            get name(): "Differing";
            get ordinal(): 1;
        };
        static get Overloads(): LibraryBuilder.SignatureLevel & {
            get name(): "Overloads";
            get ordinal(): 2;
        };
        static get All(): LibraryBuilder.SignatureLevel & {
            get name(): "All";
            get ordinal(): 3;
        };
        get name(): "None" | "Differing" | "Overloads" | "All";
        get ordinal(): 0 | 1 | 2 | 3;
        static values(): Array<LibraryBuilder.SignatureLevel>;
        static valueOf(value: string): LibraryBuilder.SignatureLevel;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace SignatureLevel.$metadata$ {
        const constructor: abstract new () => SignatureLevel;
    }
    abstract class IdentifierScope {
        private constructor();
        static get GLOBAL(): LibraryBuilder.IdentifierScope & {
            get name(): "GLOBAL";
            get ordinal(): 0;
        };
        static get LOCAL(): LibraryBuilder.IdentifierScope & {
            get name(): "LOCAL";
            get ordinal(): 1;
        };
        get name(): "GLOBAL" | "LOCAL";
        get ordinal(): 0 | 1;
        static values(): Array<LibraryBuilder.IdentifierScope>;
        static valueOf(value: string): LibraryBuilder.IdentifierScope;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace IdentifierScope.$metadata$ {
        const constructor: abstract new () => IdentifierScope;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Companion.$metadata$ {
        abstract class constructor {
            private constructor();
        }
    }
}
export declare class LibraryManager {
    constructor(modelManager: ModelManager, cqlCompilerOptions?: CqlCompilerOptions, libraryCache?: Nullable<KtMutableMap<any/* VersionedIdentifier */, any/* CompiledLibrary */>>, lazyUcumService?: any/* Lazy<UcumService> */, elmLibraryReaderProvider?: any/* ElmLibraryReaderProvider */);
    get modelManager(): ModelManager;
    get cqlCompilerOptions(): CqlCompilerOptions;
    get elmLibraryReaderProvider(): any/* ElmLibraryReaderProvider */;
    get namespaceManager(): NamespaceManager;
    get compiledLibraries(): KtMutableMap<any/* VersionedIdentifier */, any/* CompiledLibrary */>;
    get librarySourceLoader(): LibrarySourceLoader;
    get ucumService(): any/* UcumService */;
    isWellKnownLibraryName(unqualifiedIdentifier: Nullable<string>): boolean;
    canResolveLibrary(libraryIdentifier: any/* VersionedIdentifier */): boolean;
    resolveLibraries(libraryIdentifiers: KtMutableList<any/* VersionedIdentifier */>): any/* CompiledLibraryMultiResults */;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace LibraryManager.$metadata$ {
    const constructor: abstract new () => LibraryManager;
}
export declare namespace LibraryManager {
    abstract class CacheMode {
        private constructor();
        static get NONE(): LibraryManager.CacheMode & {
            get name(): "NONE";
            get ordinal(): 0;
        };
        static get READ_ONLY(): LibraryManager.CacheMode & {
            get name(): "READ_ONLY";
            get ordinal(): 1;
        };
        static get READ_WRITE(): LibraryManager.CacheMode & {
            get name(): "READ_WRITE";
            get ordinal(): 2;
        };
        get name(): "NONE" | "READ_ONLY" | "READ_WRITE";
        get ordinal(): 0 | 1 | 2;
        static values(): Array<LibraryManager.CacheMode>;
        static valueOf(value: string): LibraryManager.CacheMode;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace CacheMode.$metadata$ {
        const constructor: abstract new () => CacheMode;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Companion.$metadata$ {
        abstract class constructor {
            private constructor();
        }
    }
}
export declare interface LibrarySourceLoader {
    getLibrarySource(libraryIdentifier: any/* VersionedIdentifier */): Nullable<any>/* Nullable<Source> */;
    getLibraryContent(libraryIdentifier: any/* VersionedIdentifier */, type: any/* LibraryContentType */): Nullable<any>/* Nullable<Source> */;
    clearProviders(): void;
    registerProvider(provider: LibrarySourceProvider): void;
    readonly __doNotUseOrImplementIt: {
        readonly "org.cqframework.cql.cql2elm.LibrarySourceLoader": unique symbol;
    };
}
export declare interface LibrarySourceProvider {
    getLibrarySource(libraryIdentifier: any/* VersionedIdentifier */): Nullable<any>/* Nullable<Source> */;
    getLibraryContent(libraryIdentifier: any/* VersionedIdentifier */, type: any/* LibraryContentType */): Nullable<any>/* Nullable<Source> */;
    readonly __doNotUseOrImplementIt: {
        readonly "org.cqframework.cql.cql2elm.LibrarySourceProvider": unique symbol;
    };
}
export declare function createLibrarySourceProvider(getLibraryCql: (p0: string, p1: Nullable<string>, p2: Nullable<string>) => Nullable<any>/* Nullable<Source> */): LibrarySourceProvider;
export declare class ModelInfoLoader /* implements NamespaceAware, PathAware */ {
    constructor();
    getModelInfo(modelIdentifier: any/* ModelIdentifier */): any/* ModelInfo */;
    registerModelInfoProvider(provider: ModelInfoProvider, priority?: boolean): void;
    unregisterModelInfoProvider(provider: ModelInfoProvider): void;
    clearModelInfoProviders(): void;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace ModelInfoLoader.$metadata$ {
    const constructor: abstract new () => ModelInfoLoader;
}
export declare function createModelInfoProvider(getModelInfoXml: (p0: string, p1: Nullable<string>, p2: Nullable<string>) => Nullable<any>/* Nullable<Source> */): ModelInfoProvider;
export declare class ModelManager {
    constructor(namespaceManager?: NamespaceManager, enableDefaultModelInfoLoading?: boolean, path?: Nullable<any>/* Nullable<Path> */, globalCache?: KtMutableMap<any/* ModelIdentifier */, any/* Model */>);
    get namespaceManager(): NamespaceManager;
    get enableDefaultModelInfoLoading(): boolean;
    get path(): Nullable<any>/* Nullable<Path> */;
    get globalCache(): KtMutableMap<any/* ModelIdentifier */, any/* Model */>;
    get modelInfoLoader(): ModelInfoLoader;
    isWellKnownModelName(unqualifiedIdentifier: Nullable<string>): boolean;
    resolveModel$default(modelName: string, version?: Nullable<string>): any/* Model */;
    resolveModelByUri(namespaceUri: string): any/* Model */;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace ModelManager.$metadata$ {
    const constructor: abstract new () => ModelManager;
}
export declare function createUcumService(convertUnit: (p0: string, p1: string, p2: string) => string, validateUnit: (p0: string) => Nullable<string>): any/* Lazy<UcumService> */;
export declare function stringAsPath(string: string): any/* Path */;
export declare function stringAsSource(string: string): any/* Source */;