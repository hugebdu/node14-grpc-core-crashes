# node14-grpc-core-crashes

```
➜  node14-grpc-core npm t

> node14-grpc-core@1.0.0 test /Users/daniels/sources/node14-grpc-core
> mocha



  grpc & node 14
(node:48913) DeprecationWarning: Server#addProtoService: Use Server#addService instead
(Use `node --trace-deprecation ...` to show where the warning was created)
*********grpc-failure.spec.js:32*********** call.metadata:  Metadata {
  _internal_repr: {
    'foo-bin': [ <Buffer 66 6f 6f> ],
    'user-agent': [ 'grpc-node/1.24.2 grpc-c/8.0.0 (osx; chttp2; ganges)' ]
  },
  flags: 0
}


#
# Fatal error in , line 0
# Check failed: result.second.
#
#
#
#FailureMessage Object: 0x7ffeefbf8030
 1: 0x100112612 node::NodePlatform::GetStackTracePrinter()::$_3::__invoke() [/Users/daniels/.nvm/versions/node/v14.9.0/bin/node]
 2: 0x10100c7b2 V8_Fatal(char const*, ...) [/Users/daniels/.nvm/versions/node/v14.9.0/bin/node]
 3: 0x1004d37b4 v8::internal::GlobalBackingStoreRegistry::Register(std::__1::shared_ptr<v8::internal::BackingStore>) [/Users/daniels/.nvm/versions/node/v14.9.0/bin/node]
 4: 0x1001f9436 v8::ArrayBuffer::GetBackingStore() [/Users/daniels/.nvm/versions/node/v14.9.0/bin/node]
 5: 0x10006cfa5 node::ArrayBufferViewContents<char, 64ul>::Read(v8::Local<v8::ArrayBufferView>) [/Users/daniels/.nvm/versions/node/v14.9.0/bin/node]
 6: 0x1000860cc void node::Buffer::(anonymous namespace)::StringSlice<(node::encoding)5>(v8::FunctionCallbackInfo<v8::Value> const&) [/Users/daniels/.nvm/versions/node/v14.9.0/bin/node]
 7: 0x1002582e8 v8::internal::FunctionCallbackArguments::Call(v8::internal::CallHandlerInfo) [/Users/daniels/.nvm/versions/node/v14.9.0/bin/node]
 8: 0x10025787c v8::internal::MaybeHandle<v8::internal::Object> v8::internal::(anonymous namespace)::HandleApiCallHelper<false>(v8::internal::Isolate*, v8::internal::Handle<v8::internal::HeapObject>, v8::internal::Handle<v8::internal::]
 9: 0x100256fa2 v8::internal::Builtin_Impl_HandleApiCall(v8::internal::BuiltinArguments, v8::internal::Isolate*) [/Users/daniels/.nvm/versions/node/v14.9.0/bin/node]
10: 0x100a780b9 Builtins_CEntry_Return1_DontSaveFPRegs_ArgvOnStack_BuiltinExit [/Users/daniels/.nvm/versions/node/v14.9.0/bin/node]
[1]    48912 illegal hardware instruction  npm t
```
